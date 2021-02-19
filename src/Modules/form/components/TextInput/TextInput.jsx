import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  FormHelperText, Input, InputLabel, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  label: '',
  error: undefined,
};

const useStyles = makeStyles(({ palette }) => ({
  input: {
    backgroundColor: palette.background.paper,
    borderRadius: 5,
    border: '3px solid transparent',
  },
  inputError: {
    borderColor: palette.error.main,
  },
  errorMessage: {
    color: palette.secondary.contrastText,
  },
}));

const TextInput = ({
  label, name, type, value, onChange, error,
}) => {
  const classes = useStyles();
  const isError = !!error;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <InputLabel htmlFor={name}>
        <Typography variant="h5" component="p" color="textPrimary">
          {label}
        </Typography>
      </InputLabel>
      <Input
        className={classNames(classes.input, { [classes.inputError]: isError })}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        multiline={type === 'textarea'}
        rows={6}
        fullWidth
        disableUnderline
      />
      <FormHelperText className={classes.errorMessage} variant="outlined">
        {error}
      </FormHelperText>
    </>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
