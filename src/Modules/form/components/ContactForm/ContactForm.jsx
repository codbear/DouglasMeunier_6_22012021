import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, IconButton, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { validateField, isEmail, isRequired } from '../../services/validation';
import TextInput from '../TextInput';
import { formReducer, INITIAL_STATE } from '../../reducers';
import {
  setEmail, setFirstName, setLastName, setMessage, toggleError,
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

const fields = [
  {
    name: 'firstName',
    type: 'text',
    label: 'Prénom',
    setValue: setFirstName,
    validators: [isRequired],
    errorMessage: 'Veuillez renseigner votre prénom',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Nom',
    setValue: setLastName,
    validators: [isRequired],
    errorMessage: 'Veuillez renseigner votre nom',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    setValue: setEmail,
    validators: [isRequired, isEmail],
    errorMessage: 'Veuillez renseigner votre email',
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Votre message',
    setValue: setMessage,
    validators: [isRequired],
    errorMessage: 'Veuillez saisir un message',
  },
];

const ContactForm = ({ title, isOpen, handleClose }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    fields.forEach((field) => {
      const isFieldValid = validateField(field.validators)(state[field.name].value);
      dispatch(toggleError({
        field: field.name,
        isError: !isFieldValid,
      }));
      isFormValid = isFieldValid && isFormValid;
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
    }
  };
  return (
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
          const { value, isError } = state[field.name];

          return (
            <div className={classes.formControl} key={field.name}>
              <TextInput
                type={field.type}
                name={field.name}
                label={field.label}
                value={value}
                error={isError ? field.errorMessage : undefined}
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
  );
};

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
