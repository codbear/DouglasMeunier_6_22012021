const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/,
  NAME: /^[^\d@&"(§!)^$`<,;:=#_¨*%£>?./+\\{}€|~]{2,}$/,
  EMPTY: /^[\s]*$/,
};

export const validateField = (validationArray) => (value) => {
  let error;

  if (!validationArray) {
    return error;
  }

  validationArray.some((validator) => {
    error = validator(value);
    return !!error;
  });

  return error;
};

export const isRequired = (value) => {
  const isEmpty = REGEX.EMPTY.test(value);

  if (!value || isEmpty) {
    return 'Ce champ est obligatoire.';
  }
  return undefined;
};

export const isEmail = (value) => {
  const isValidEmail = REGEX.EMAIL.test(value);

  if (!isValidEmail) {
    return 'Veuillez entrer une adresse email valide.';
  }

  return undefined;
};

export const isName = (value) => {
  const isValidName = REGEX.NAME.test(value);

  if (!isValidName) {
    return 'Veuillez entrer un nom valide.';
  }

  return undefined;
};
