# Lesson 2.2: Debugging and Bug Fixing — Notes & Cheat Sheet

## What You Learned

You practiced the core debugging workflow: let Claude **explore and diagnose first**, then fix — never jump straight to "fix this".

---

## The Bug You Fixed

**Error:** `TypeError: email.includes is not a function`  
**Root cause:** `userService.js` passed the whole `user` object to `validateEmail()` instead of `user.email`  
**Fix:** `validateEmail(user)` → `validateEmail(user.email)` in `src/userService.js:22`

---

## Cheat Sheet

**The Golden Rule**
> Give Claude the error first. Ask for the diagnosis. Ask for the fix second.

---

**The Debugging Workflow**

```
1. Run the code → get the full stack trace
2. Paste the trace and say: "Explain the root cause. Don't fix it yet."
3. Review Claude's diagnosis — is the call chain correct?
4. Say: "Now write reproduction steps, then fix it."
5. Verify the fix runs clean
```

---

**Key Commands / Techniques**

| Technique | How |
|---|---|
| Diagnose before fix | "Explain the root cause. Don't fix it yet." |
| Trace the call chain | "Trace this call chain starting from `@index.js`" |
| Reproduce before fix | "Write reproduction steps, then fix it." |
| Give raw output | Paste the full stack trace — don't summarize it |

---

**The Highest-Leverage Habit**
> Resist saying "fix this." One extra sentence ("don't fix it yet") produces a better diagnosis and a more targeted fix.
