# Lesson 1.3: Your First Conversation with Claude Code

**Video length:** 5-8 minutes
**Target audience:** Developers who have installed Claude Code but haven't used it yet
**Companion blog post:** These notes double as a written guide viewers can follow along with

---

## 1. Intro (0:00 - 0:30)

**Talking points:**
- "In this video, you'll have your first real conversation with Claude Code."
- "We're going to explore a project, build a feature, and fix a bug — all by typing natural language into the terminal."
- "By the end, you'll understand how the core loop works: you describe what you want, Claude reads your code, plans, and acts."

**On screen:** Terminal open, in a project directory.

---

## 2. Prerequisites (0:30 - 1:00)

**Talking points:**
- "Before we start, you need three things."
- Walk through each prerequisite briefly — don't dwell.

**What viewers need:**
- Node.js 18+ installed
- Claude Code installed (`brew install claude-code` on macOS, `winget install Anthropic.ClaudeCode` on Windows)
- A Claude Pro/Max subscription or Anthropic API key
- A small project to work with (we'll use the practice Express app)

**On screen:** Quick flash of each prerequisite. Don't demo installation — that's Lesson 1.2.

---

## 3. Setup — The Practice Express App (1:00 - 1:30)

**Talking points:**
- "We're using a simple Express app with a users API. Nothing fancy — just enough to have a real conversation with Claude about real code."
- Briefly describe the starting point: three endpoints, in-memory data, no tests.

**Starting code to show** (`index.js` before our changes):

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
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
  const newUser = { id: users.length + 1, ...req.body };
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

**Key things to point out:**
- No `/health` endpoint
- The POST endpoint accepts anything — no input validation
- These are the two things we'll ask Claude to fix

**On screen:** Show `index.js` in the editor, then switch to terminal.

---

## 4. Core Concept: The REPL Loop (1:30 - 2:00)

**Talking points:**
- "Claude Code works like a REPL — a read-eval-print loop. You type a natural language prompt, Claude reads your codebase, decides what to do, and acts."
- "It's not a chatbot. It has access to your files, your terminal, and your git history. It can read code, edit files, and run commands."
- "Think of it as pair programming where your partner can see your entire project."

**On screen:** Start a Claude Code session:

```
cd practice-express-app
claude
```

**What viewers should notice:** Claude starts up and shows the interactive prompt. You're now in a conversation.

---

## 5. Demo Section 1: Explore (2:00 - 3:00)

**Talking points:**
- "The first thing to try with any project is asking Claude to explore it."
- "This is useful when onboarding to a new codebase or just getting your bearings."

**Prompt to type:**

```
What is this project and how is it structured?
```

**Expected behavior:**
- Claude reads `package.json` and `index.js` (you'll see file read indicators)
- Claude responds with a summary: it's an Express app, Express 5, has a users CRUD API with in-memory storage
- Claude lists the endpoints: GET `/users`, GET `/users/:id`, POST `/users`, DELETE `/users/:id`

**What viewers should notice:**
- Claude didn't just guess — it actually read the files
- The response is structured and accurate
- No permissions were needed because Claude only *read* files

**Talking point after demo:**
- "Notice Claude read the files first, then answered. It's grounded in your actual code, not hallucinating."

---

## 6. Demo Section 2: Build (3:00 - 4:30)

**Talking points:**
- "Now let's ask Claude to add something new — a health check endpoint."
- "This is the bread and butter of Claude Code: describe what you want, let it build."

**Prompt to type:**

```
Add a health check endpoint at GET /health that returns { "status": "ok" }
```

**Expected behavior:**
1. Claude proposes editing `index.js`
2. **Permission prompt appears** — Claude asks to write to `index.js` (y/n)
3. Accept with `y`
4. Claude adds the `/health` route (typically near the top, before other routes)
5. Claude shows the diff of what it changed

**The code Claude adds (approximately):**

```js
// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

**What viewers should notice:**
- Claude asked for permission before editing a file — this is the permission system in action
- The diff shows exactly what changed — nothing hidden
- Claude placed the route logically in the file
- The implementation matches what we asked for

**Talking point after demo:**
- "Claude didn't just dump code in your chat — it edited the actual file. You can verify by opening `index.js`."

**Optional — test it live:**

```
Start the server and test the health endpoint with curl
```

Claude may run `node index.js` and `curl http://localhost:3000/health` (each requiring permission).

---

## 7. Demo Section 3: Fix (4:30 - 5:45)

**Talking points:**
- "Now the real power — bug fixing. Look at our POST endpoint. It blindly accepts whatever you send and creates a user. No name? No email? No problem. That's a bug."
- "Let's ask Claude to fix it."

**Prompt to type:**

```
The POST /users endpoint doesn't validate input. Fix it so name and email are required.
```

**Expected behavior:**
1. Claude reads the current POST handler
2. Claude proposes adding validation — checking for `name` and `email`, returning 400 if missing
3. Permission prompt to edit `index.js`
4. Accept with `y`
5. Claude modifies the POST handler

**The fix Claude applies (approximately):**

```js
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});
```

**What viewers should notice:**
- Claude understood the context — it knew what the endpoint does and what "validate" means here
- It chose a sensible validation approach (check for presence, return 400)
- It destructured `name` and `email` from `req.body` instead of spreading the whole body — a security improvement too
- The error message is clear and useful

**Talking point after demo:**
- "We described the problem in plain English. Claude found the code, understood the issue, and applied a clean fix. That's the loop: describe, review, approve."

---

## 8. The Permission System (5:45 - 6:15)

**Talking points:**
- "You probably noticed Claude asked permission before editing files or running commands. This is by design."
- "Claude Code has a trust model: reading files is free, but writing files, running shell commands, or anything that changes state requires your approval."
- "You can always say `n` to reject an action. You can also approve tools permanently if you trust them."

**Key rules to mention:**
- **Reads** (viewing files, searching code): no permission needed
- **Writes** (editing files, creating files): permission required
- **Shell commands** (running scripts, installing packages): permission required
- You stay in control at every step

**On screen:** Show a permission prompt if one is still visible, or describe what it looks like.

---

## 9. Key Takeaways (6:15 - 6:45)

**Talking points — read these as a quick recap:**

1. **Claude Code is a REPL** — natural language in, real actions out. It reads your code, edits files, and runs commands.
2. **Start by exploring** — ask Claude to explain the project before you start changing things. It grounds the conversation.
3. **Describe what you want, not how** — say "add a health check endpoint" not "open index.js and on line 7 insert...". Let Claude figure out the implementation.
4. **The permission system keeps you in control** — Claude always asks before making changes. Review the diff, then approve or reject.

---

## 10. What's Next (6:45 - 7:00)

**Talking points:**
- "In the next lesson — Module 2, Lesson 2.1 — we go deeper into feature building."
- "We'll build a complete feature across multiple files, with validation, error handling, and tests — all through Claude Code."
- "If you found this useful, like and subscribe. Drop a comment if you tried it and how it went."

**On screen:** End card / subscribe prompt.

---

## Production Notes

**Screen recording tips:**
- Use a clean terminal with a readable font size (14-16pt)
- Start the Claude Code session fresh so viewers see the full startup
- Pause briefly after each Claude response so viewers can read it
- If Claude's response is long, scroll through it slowly

**If something goes wrong during recording:**
- Claude might phrase things differently each time — that's fine, the substance will be the same
- If Claude asks to run a command you didn't expect, just say `n` and explain to viewers what happened
- If Claude makes a mistake, that's actually great content — show how you correct it

**Timing breakdown:**
| Section | Duration |
|---------|----------|
| Intro | 0:30 |
| Prerequisites | 0:30 |
| Setup | 0:30 |
| Core Concept | 0:30 |
| Demo: Explore | 1:00 |
| Demo: Build | 1:30 |
| Demo: Fix | 1:15 |
| Permission System | 0:30 |
| Takeaways | 0:30 |
| What's Next | 0:15 |
| **Total** | **~7:00** |
