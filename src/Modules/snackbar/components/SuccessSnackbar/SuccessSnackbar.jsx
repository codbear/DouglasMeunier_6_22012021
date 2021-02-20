import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import Alert from '../Alert';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const SuccessSnackbar = ({ isOpen, handleClose, message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={isOpen}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity="success">
      {message}
    </Alert>
  </Snackbar>
);

SuccessSnackbar.propTypes = propTypes;

export default SuccessSnackbar;
