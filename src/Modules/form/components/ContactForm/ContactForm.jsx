import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, IconButton, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import SuccessSnackbar from 'Modules/snackbar';
import {
  validateField, isEmail, isRequired, isName,
} from '../../services/validation';
import TextInput from '../TextInput';
import { formReducer, INITIAL_STATE } from '../../reducers';
import {
  setEmail, setFirstName, setLastName, setMessage, setError,
} from '../../actions';

const propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Contactez-moi',
};

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    padding: spacing(4),
    backgroundColor: palette.secondary.main,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: spacing(2.5),
  },
  closeButton: {
    padding: 0,
    marginLeft: spacing(13),
    color: palette.text.white,
  },
  formControl: {
    marginBottom: spacing(1),
    '&:last-of-type': {
      marginBottom: spacing(3),
    },
  },
}));

const UCFirst = (string) => string[0].toUpperCase() + string.substring(1);

const fields = [
  {
    name: 'firstName',
    type: 'text',
    label: 'Prénom',
    setValue: (value) => setFirstName(UCFirst(value)),
    validators: [isRequired, isName],
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Nom',
    setValue: (value) => setLastName(UCFirst(value)),
    validators: [isRequired, isName],
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    setValue: setEmail,
    validators: [isRequired, isEmail],
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Votre message',
    setValue: setMessage,
    validators: [isRequired],
  },
];

const ContactForm = ({ title, isOpen, handleClose }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    fields.forEach((field) => {
      const error = validateField(field.validators)(state[field.name].value);
      dispatch(setError({
        field: field.name,
        error,
      }));
      isFormValid = !error && isFormValid;
    });

    if (isFormValid) {
      const formData = Object.keys(state).reduce((acc, field) => {
        if (!acc[field]) {
          acc[field] = state[field].value;
        }

        return acc;
      }, {});

      // eslint-disable-next-line no-console
      console.log(formData);
      handleClose();
      setIsSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullScreen={isSmallScreen}
        aria-labelledby="formTitle"
        PaperProps={{
          className: classes.root,
        }}
      >
        <div className={classes.header}>
          <Typography variant="h3" component="h1" id="formTitle">
            {title}
          </Typography>
          <IconButton
            className={classes.closeButton}
            onClick={handleClose}
            aria-label="Fermer le formulaire de contact"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          {fields.map((field) => {
            const { value, error } = state[field.name];

            return (
              <div className={classes.formControl} key={field.name}>
                <TextInput
                  type={field.type}
                  name={field.name}
                  label={field.label}
                  value={value}
                  error={error}
                  onChange={(newValue) => dispatch(field.setValue(newValue))}
                />
              </div>
            );
          })}
          <Button variant="contained" type="submit" color="primary" size="large">
            Envoyer
          </Button>
        </form>
      </Dialog>
      <SuccessSnackbar
        isOpen={isSnackbarOpen}
        handleClose={handleSnackbarClose}
        message="Votre message a été envoyé"
      />
    </>
  );
};

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
