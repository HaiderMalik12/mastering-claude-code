const { validateEmail, validateRequiredFields } = require('./validator');

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'user' },
];

function getUserById(id) {
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
}

function getUserProfile(id) {
  const user = getUserById(id);

  validateRequiredFields(user, ['name', 'email', 'role']);

  validateEmail(user.email);

  return {
    id: user.id,
    displayName: user.name,
    email: user.email,
    role: user.role,
    profileUrl: `/users/${user.id}`,
  };
}

module.exports = { getUserProfile };
