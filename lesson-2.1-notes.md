# Lesson 2.1: Feature Building with Claude Code — Notes & Cheat Sheet

## What You Learned

You practiced the core workflow of using Claude Code as a **feature-building partner** — giving it intent and letting it figure out implementation.

---

## Cheat Sheet

**The Golden Rule**
> Describe *outcomes*, not *steps*. "Validate the input" not "add an `@IsString()` decorator".

---

**The Feature-Building Workflow**

```
1. Write a clear natural-language feature description
2. Ask Claude to plan BEFORE coding
3. Review the plan — catch wrong assumptions early
4. Approve (or redirect) the plan
5. Let Claude execute
6. Iterate conversationally for changes
7. Ask for tests separately at the end
```

---

**Key Commands / Techniques**

| Technique | How |
|---|---|
| Get a plan first | "Before writing any code, show me your plan..." |
| Anchor to existing patterns | "Follow the same pattern as `@index.js`" |
| Interrupt mid-task | Press `Esc` (context is preserved) |
| Redirect after interruption | Correct course, then say "go ahead" |
| Iterate on built features | "Also reject empty strings" — Claude patches existing code |

---

**Plan Review Checklist**
- [ ] Right files touched? (No unnecessary new files)
- [ ] Matches existing patterns in the codebase?
- [ ] No unnecessary dependencies added?
- [ ] All validation cases accounted for?
- [ ] Independent decisions by Claude — are they reasonable?

---

**Lessons from This Session**
- Claude's plan was correct: single file, no new deps, matched the `/users` pattern
- It made one good independent call: add `createdAt` (you didn't ask for it — and it was right)
- UUID helper placement (before routes) shows Claude thinks about code organization, not just feature output
- `crypto.randomUUID()` — always verify Node version assumptions in Claude's plans

---

**The Highest-Leverage Habit**
> Review the plan. Every minute spent there saves 10 minutes of undoing wrong edits.
