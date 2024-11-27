function validatePassword(password) {
  const length = password.length >= 8;
  const hasLowerCase = /[a-z]/g.test(password);
  const hasUpperCase = /[A-Z]/g.test(password);
  const hasNumber = /[0-9]/g.test(password);

  const validPassword = length && hasLowerCase && hasNumber && hasUpperCase;
  return validPassword;
}

module.exports = validatePassword;
