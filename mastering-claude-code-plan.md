# Claude Code Mastery: Complete Learning Plan

*From zero to power user — a structured path to mastering AI-powered coding with Claude Code*

---

## Progress Tracker

| Lesson | Title | Status | Completed |
|--------|-------|--------|-----------|
| 1.1 | What Is Claude Code and Why It Matters | ✅ Done | 2026-04-07 |
| 1.2 | Installation and First Launch | ✅ Done | 2026-04-07 |
| 1.3 | Your First Conversation with Claude Code | ✅ Done | 2026-04-07 |
| 2.1 | Feature Building with Claude Code | ✅ Done | 2026-04-07 |
| 2.2 | Debugging and Bug Fixing | ✅ Done | 2026-04-07 |
| 2.3 | Git Workflows | ✅ Done | 2026-04-07 |
| 2.4 | Testing and Code Quality | | |

---

## Module 1: Foundations — Understanding Claude Code

### Lesson 1.1: What Is Claude Code and Why It Matters
- Claude Code as an **agentic coding tool** vs. traditional code assistants (copy-paste chatbots)
- The paradigm shift: you describe what you want, Claude explores → plans → implements
- Where Claude Code runs: Terminal CLI, VS Code/Cursor extension, JetBrains plugin, Desktop app, Browser (claude.ai/code)
- Claude Code vs. Cursor vs. GitHub Copilot — when and why Claude Code wins
- **Key concept**: Claude Code reads your codebase, edits files, runs commands, and integrates with your dev tools autonomously

### Lesson 1.2: Installation and First Launch
- Prerequisites: Node.js 18+, Git (Git for Windows on Windows)
- Installation methods: `brew install claude-code` (macOS), `winget install Anthropic.ClaudeCode` (Windows), npm (deprecated but still works)
- Authentication: Claude Pro/Max subscription or Anthropic API key
- First run: `cd your-project && claude`
- The `/doctor` command — diagnosing installation, auth, and config issues
- **Hands-on**: Install Claude Code, navigate to a project, and start your first session

### Lesson 1.3: Your First Conversation with Claude Code
- How the interactive REPL works — natural language in, actions out
- Asking Claude to explore your codebase: "Walk me through how our auth system works"
- Asking Claude to build something: "Create an API endpoint that returns user profiles"
- Asking Claude to fix a bug: paste an error message and let Claude trace it
- Understanding the permission system — when Claude asks before acting
- **Hands-on**: Have Claude explore a project, explain its structure, and make a small change

---

## Module 2: Core Workflows — The Daily Driver

### Lesson 2.1: Feature Building with Claude Code
- Describing what you want in plain language
- How Claude plans the approach, writes code across multiple files, and verifies
- Providing context: use `@filename` to reference specific files
- Reviewing Claude's plan before it executes
- Iterating: redirecting Claude mid-task when it goes off track
- **Hands-on**: Build a complete feature (e.g., a REST endpoint with validation and tests) entirely through Claude Code

### Lesson 2.2: Debugging and Bug Fixing
- Pasting error messages and stack traces
- Letting Claude trace issues through your codebase
- The "explore first, then plan, then code" pattern
- Using Claude to write reproduction steps before fixing
- **Hands-on**: Take a real bug, give Claude the error output, and watch it diagnose and fix

### Lesson 2.3: Git Workflows
- Claude Code's native git integration: staging, committing, branching
- Letting Claude write commit messages from your changes (why, not just what — inferred from `git log` style)
- Creating and managing pull requests from the terminal using the `gh` CLI
- Resolving merge conflicts with Claude's help (conflict markers read and resolved with context)
- Built-in safety behaviors: warns on force-push to main, won't skip hooks without explicit request, creates new commits instead of amending published ones, warns before staging `.env` files
- **Hands-on**: Make changes with Claude, have it commit with good messages, and create a PR
- **Key concept**: Always add a `.gitignore` before the first commit to prevent accidentally staging `node_modules`, `.env`, or build artifacts

### Lesson 2.4: Testing and Code Quality
- Asking Claude to write tests for untested code
- Fixing lint errors across an entire project
- Updating dependencies and writing release notes
- Code review: having Claude review your own code for bugs and improvements
- **Hands-on**: Point Claude at an untested module and have it generate a comprehensive test suite

---

## Module 3: Session Management — Working Efficiently

### Lesson 3.1: Context Management
- Understanding Claude's context window and why it matters
- The `/context` command — checking how much context you've used
- The `/compact` command — summarizing conversation to free context
- **Critical rule**: Do manual `/compact` at ~50% context usage, don't wait for auto-compact
- `/clear` to reset context when switching to a new task
- **Hands-on**: Monitor context during a session, practice compacting at the right time

### Lesson 3.2: Checkpoints and Rewinding
- How checkpoints work: auto-generated at each prompt, retained for 30 days
- Three restore modes: Chat only, Code only, Both
- `Esc` to stop Claude mid-action (context preserved, you can redirect)
- `Esc + Esc` or `/rewind` to open the rewind menu
- When to rewind vs. when to correct in-place
- **Key principle**: Course-correct early and often — tight feedback loops produce better code

### Lesson 3.3: Session Persistence
- `/rename` important sessions (e.g., `[TODO - refactor auth module]`)
- `/resume` to pick up where you left off
- When to start fresh vs. resume — clean context for implementation after planning
- The "spec then implement" pattern: plan in one session, write spec to file, execute in a fresh session
- **Hands-on**: Rename a session, close it, resume it later, and continue working

### Lesson 3.4: Model Selection and Thinking
- `/model` to select model and reasoning level
- Enabling thinking mode (`true`) for better reasoning visibility
- Output Style: set to "Explanatory" for detailed output with insight boxes
- The `ultrathink` keyword in prompts for maximum reasoning effort
- `/usage` to check plan limits, `/extra-usage` to configure overflow billing
- **Hands-on**: Compare results with and without thinking mode on a complex task

---

## Module 4: CLAUDE.md — Your Project's AI Configuration

### Lesson 4.1: What CLAUDE.md Is and Why It's High-Leverage
- CLAUDE.md as persistent context Claude reads at the start of every conversation
- The hierarchy: global (`~/.claude/CLAUDE.md`) → project root → nested directories
- Why this is the single highest-leverage configuration point
- What Claude can't infer from code alone: workflow rules, team conventions, deployment processes

### Lesson 4.2: Writing an Effective CLAUDE.md
- Running `/init` to generate a starter file, then refining
- The three pillars: WHAT (tech stack, project structure), WHY (purpose, architecture), HOW (commands, workflows)
- Keep it under 200 lines — frontier models follow ~150-200 instructions reliably
- Include: build commands, test commands, code style rules, key directories, architecture decisions
- Don't stuff every possible command — Claude is smart enough to discover; focus on what it can't infer
- **CLAUDE.md is not a linter** — use actual linters and formatters; CLAUDE.md is for context and conventions

### Lesson 4.3: CLAUDE.md Structure and Best Practices
- Recommended sections: Project Overview, Tech Stack, Architecture, Coding Rules, Build/Test Commands, Workflow Rules
- Example structure for a NestJS project
- Hierarchical CLAUDE.md for monorepos: ancestor + descendant loading
- Global user memory vs. local project memory (git-ignored)
- Treating CLAUDE.md as a living document — update as your project evolves
- **Hands-on**: Write a CLAUDE.md for one of your NestJS projects from scratch

### Lesson 4.4: Advanced CLAUDE.md Patterns
- Using `@` syntax to link to other markdown files for large documentation sets
- Adding verification commands: "After making changes, run `npm test` to verify"
- Encoding architectural decisions that prevent Claude from making wrong choices
- Anti-patterns: auto-generated CLAUDE.md without human review, overstuffing with generic advice
- **Hands-on**: Refine your CLAUDE.md based on actual friction points from a week of use

---

## Module 5: Slash Commands — Your Workflow Shortcuts

### Lesson 5.1: Built-in Slash Commands
- `/help` — see all available commands
- `/init` — generate starter CLAUDE.md
- `/compact` — summarize and free context
- `/clear` — reset session context
- `/rewind` — checkpoint restore
- `/model` — switch models
- `/config` — configure settings
- `/context` — check context usage
- `/doctor` — diagnose issues
- `/agents` — manage subagents
- `/hooks` — configure hooks
- `/insights` — analyze recent sessions for patterns (run weekly)
- `/sandbox` — enable filesystem/network sandboxing
- `/loop` — run prompts on recurring schedules (up to 3 days)

### Lesson 5.2: Creating Custom Slash Commands
- Where to put them: `.claude/commands/` (project) or `~/.claude/commands/` (global)
- File format: markdown files with natural language instructions
- Using `$ARGUMENTS` to pass arguments into the prompt
- Examples: `/review`, `/fix-bug`, `/generate-tests`, `/create-feature`
- **Hands-on**: Create 3 custom commands for your most common workflows

### Lesson 5.3: Command Design Patterns
- Commands that invoke subagents for planning, then main Claude handles execution
- Utility commands that run bash scripts
- Commands that combine MCP tools with specific instructions
- Naming conventions and organization
- **Hands-on**: Build a `/nestjs-module` command that scaffolds a complete NestJS module with tests

---

## Module 6: Extending Claude Code — The Extension Ecosystem

### Lesson 6.1: Understanding the Extension Stack
- Six extension points and when each went public: MCP (Nov 2024), Subagents (Jul 2025), Hooks (Sep 2025), Plugins (Oct 2025), Skills (Oct 2025), Agent Teams (Feb 2026)
- The layering principle: Skills define what to do, MCP provides data, Subagents handle delegation, Hooks enforce rules, Plugins package everything
- Start with Skills + MCP (covers 80% of workflows), then layer up

### Lesson 6.2: MCP (Model Context Protocol) Servers
- What MCP is: a standard protocol connecting AI tools to external data sources
- Installing MCP servers: `claude mcp add <name> <command>`
- Essential MCP servers: Context7 (versioned API docs), Brave Search (web search), Supabase, GitHub
- Configuring globally (`~/.claude.json`) vs. per-project
- Monitoring context consumption with `/context` — remove unused servers
- Security: principle of least privilege (read-only for most servers)
- **Hands-on**: Install Context7 and Brave Search MCP servers, use them in a coding session

### Lesson 6.3: Skills — Auto-Invoked Knowledge
- Skills as markdown-based guides Claude loads automatically based on context
- Unlike commands (user-triggered), skills are invoked via natural language
- Skill structure: `SKILL.md` with name, description, and instructions
- Creating project-specific skills: `.claude/skills/`
- Using the `skills` field to preload skills into subagents
- **Hands-on**: Create a "NestJS API conventions" skill that Claude automatically references

### Lesson 6.4: Hooks — Deterministic Control
- Hooks as scripts that fire at lifecycle events (not AI — pure automation)
- Key hook events: PreToolUse, PostToolUse, UserPromptSubmit, Notification, Stop, SessionStart, SessionEnd
- Common uses: auto-lint after edits, type-check before accepting, block dangerous commands
- Configuring via `/hooks` interactive menu or `settings.json`
- Exit code 2 blocks the operation and feeds error back to Claude
- **Hands-on**: Set up a hook that runs Prettier after every file edit and TypeScript type-check after edits

---

## Module 7: Subagents — Specialized AI Workers

### Lesson 7.1: Understanding Subagents
- Subagents as specialized Claude instances with their own context windows
- Why subagents matter: isolated context prevents pollution, each gets exactly what it needs
- Built-in subagents vs. custom subagents
- When to use subagents: parallel execution, heavy investigation, domain-specific tasks
- **Key advantage**: subagents summarize findings back to the main agent, saving precious context

### Lesson 7.2: Creating Custom Subagents
- File format: `.claude/agents/*.md` with YAML frontmatter
- Frontmatter fields: name, description, tools, disallowedTools, model, permissionMode, maxTurns, skills, mcpServers, hooks, memory
- Using `/agents` → Create new agent → Generate with Claude
- User-level (`~/.claude/agents/`) vs. project-level (`.claude/agents/`)
- **Hands-on**: Create a code-reviewer subagent with read-only tool access

### Lesson 7.3: Subagent Architecture Patterns
- The Command → Agent → Skill pattern for orchestration
- Pipeline pattern: spec-writer → architect-review → implementer → tester
- Scoping MCP servers to specific subagents (keep tools out of main conversation)
- Using `permissionMode` wisely: plan, acceptEdits, bypassPermissions
- Using `model: haiku` for fast, cheap subagent tasks
- **Hands-on**: Build a two-stage pipeline: research subagent → implementation in main session

### Lesson 7.4: Agent Teams (Advanced)
- Agent Teams as multi-agent coordination configured through prompts
- Lead agent handles orchestration; teammates inherit permissions
- When to use teams vs. individual subagents
- Practical patterns: parallel research, divide-and-conquer refactoring
- **Hands-on**: Set up an agent team for a large refactoring task

---

## Module 8: Plugins — Packaging and Sharing

### Lesson 8.1: Understanding Plugins
- Plugins as bundled packages of skills, subagents, and commands
- Installing plugins: `claude plugin add --path ./my-plugin` or from marketplace
- Namespaced commands: `/my-plugin:hello`
- Priority on name collision: enterprise > user > project > plugin

### Lesson 8.2: Creating Your Own Plugin
- Plugin structure: skills, agents, commands, hooks, templates
- The install script for automated setup
- Distribution: sharing with teams or publishing to marketplace
- **Hands-on**: Package your NestJS-specific skills and commands into a plugin

---

## Module 9: Prompting Strategies for Claude Code

### Lesson 9.1: Effective Prompting Fundamentals
- Be specific: "Add input validation to the createUser endpoint using class-validator decorators" vs. "make it better"
- Provide rich context: paste error messages, link files with `@`, describe expected behavior
- The "explore first" pattern: ask Claude to understand before changing
- The "interview me" pattern: "Ask me questions about what I want before you start building"

### Lesson 9.2: Advanced Prompting Techniques
- "Use subagent" or "multiple subagents" to trigger delegation
- "Use Context7 MCP" to force documentation lookup
- "ultrathink" for maximum reasoning on complex architecture decisions
- Asking Claude to write a spec first: "Write a complete spec to SPEC.md, then we'll implement in a new session"
- Cross-model review: use a different model to QA the plan before implementation

### Lesson 9.3: The Planning Workflow
- Phase-wise gated plans: each phase has tests (unit, automation, integration)
- Writing specs in one session, implementing in a fresh session with clean context
- Asking Claude to "dig into the hard parts I might not have considered"
- Having Claude create a task breakdown before coding
- **Hands-on**: Use the planning workflow for a real feature in your NestJS project

---

## Module 10: IDE Integration — VS Code and JetBrains

### Lesson 10.1: VS Code / Cursor Extension
- Installing the extension (search "Claude Code" in Extensions view)
- Opening Claude Code in a new tab: Command Palette → "Claude Code" → Open in New Tab
- Inline diffs, @-mentions, plan review, conversation history
- Running multiple Claude instances in parallel in different panes
- When to use the extension vs. the terminal

### Lesson 10.2: JetBrains Integration
- Installing the Claude Code plugin from JetBrains Marketplace
- Interactive diff viewing and selection context sharing
- Working with IntelliJ IDEA, WebStorm, and PyCharm

### Lesson 10.3: Parallel Sessions
- Running multiple Claude Code sessions on different parts of your codebase
- Using the Desktop app for side-by-side sessions
- **Key rule**: each session should work on different files to avoid conflicts
- **Hands-on**: Run two parallel sessions — one building a feature, one writing tests

---

## Module 11: CI/CD and Automation — Headless Mode

### Lesson 11.1: Headless Mode Fundamentals
- The `-p` flag: run a prompt, get a response, exit — no interaction needed
- Output formats: text, json, stream-json
- Piping: `cat file.ts | claude -p "Find bugs"` and `git diff | claude -p "Review this diff"`
- Session IDs for multi-turn automation: `--session-id my-review-001`
- Exit codes: 0 = success, 1 = generic error, 2 = auth error

### Lesson 11.2: GitHub Actions Integration
- Setting up Claude Code in GitHub Actions workflows
- The official `@claude` mention in PRs and issues
- Automated code review on every PR
- Issue-to-PR automation: Claude reads issues and creates implementing PRs
- Security: GitHub Secrets for API keys, `--allowedTools` to restrict permissions
- `--dangerously-skip-permissions` only in isolated CI containers

### Lesson 11.3: Advanced CI/CD Patterns
- Automated test generation after each commit
- Security audits on a schedule (weekly cron)
- Automatic changelog generation post-merge
- Technical debt detection scans
- Code migration automation (e.g., CommonJS to ESM)
- Shell aliases for frequent headless commands
- **Hands-on**: Set up a GitHub Action that runs Claude Code review on PRs for your NestJS project

### Lesson 11.4: The Claude Agent SDK
- Claude Code as a library for programmatic integration
- Building custom automation beyond GitHub Actions
- Combining with MCP servers for complex pipelines
- Cost management: monitoring tokens and setting limits

---

## Module 12: Advanced Patterns and Real-World Mastery

### Lesson 12.1: Context Engineering
- Understanding that context is your most precious resource
- Strategic use of subagents for research (they summarize, saving main context)
- The `/insights` command: run weekly to surface patterns in your workflow
- When to use `/clear` vs. `/compact` vs. starting a new session
- The "avoid agent dumb zone" — compaction artifacts degrade quality over long sessions

### Lesson 12.2: The Orchestration Pattern
- Command → Agent → Skill architecture
- Commands as entry points, agents as workers, skills as knowledge
- Designing reproducible, consistent workflows
- When vanilla Claude Code beats complex workflow setups (for smaller tasks, keep it simple)

### Lesson 12.3: Security and Sandboxing
- The `/sandbox` command: filesystem and network isolation
- `--allowedTools` for restricting what Claude can do
- Read-only MCP server configurations for safety
- Principle of least privilege for subagents
- Reviewing Claude's changes before merging (always)

### Lesson 12.4: Cost Optimization
- Understanding token consumption per session
- Using `model: haiku` for subagent tasks that don't need full reasoning
- Monitoring with `/usage`
- Subscription vs. API billing tradeoffs
- Batching related work in fewer, focused sessions

### Lesson 12.5: Building Your Personal Claude Code System
- Designing your global CLAUDE.md for preferences that apply everywhere
- Building a personal toolkit: 5-10 custom commands, 3-5 reusable skills, 2-3 key subagents
- Weekly review cycle: run `/insights`, update CLAUDE.md, refine commands
- Packaging your setup as a plugin for team sharing
- **Hands-on**: Build your complete personal Claude Code configuration optimized for NestJS development