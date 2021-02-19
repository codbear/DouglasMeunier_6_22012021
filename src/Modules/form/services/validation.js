export const validateField = (validationArray) => (value) => {
  let isValid = true;

  if (!validationArray) {
    return isValid;
  }

  validationArray.some((validator) => {
    isValid = validator(value);

    return !isValid;
  });

  return isValid;
};

export const isRequired = (value) => !!value;

export const isEmail = (value) => {
  const regex = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regex.test(value);
};
