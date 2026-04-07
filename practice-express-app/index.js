const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// UUID validation helper
const isValidUUID = (str) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);

// In-memory data store
const articles = [];
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const usr = users.find(u => u.id === parseInt(req.params.id));
  if (!usr) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(usr);
});

// Create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const deleted = users.splice(index, 1)[0];
  res.json(deleted);
});

// Create a new article
app.post('/articles', (req, res) => {
  const { title, body, authorId } = req.body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title is required and must be a string' });
  }
  if (title.length > 200) {
    return res.status(400).json({ error: 'title must be 200 characters or fewer' });
  }
  if (!body || typeof body !== 'string') {
    return res.status(400).json({ error: 'body is required and must be a string' });
  }
  if (!authorId || !isValidUUID(authorId)) {
    return res.status(400).json({ error: 'authorId is required and must be a valid UUID' });
  }

  const article = {
    id: crypto.randomUUID(),
    title,
    body,
    authorId,
    createdAt: new Date().toISOString(),
  };
  articles.push(article);
  res.status(201).json(article);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
