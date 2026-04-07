function validateEmail(email) {
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
  return true;
}

function validateRequiredFields(data, requiredFields) {
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  return true;
}

module.exports = { validateEmail, validateRequiredFields };
