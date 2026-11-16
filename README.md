# CraftSpec

> **A top-tier AI design-requirement architect and spec optimizer**  
> Say goodbye to generic "AI slop" templates. Through the four-dimension "Ask Once" interview, hard-floor defenses (The Floor), and mobile safeguards, CraftSpec rebuilds vague design requests into precise, anti-template, directly executable AI design specs and prompts.

---

## Core Highlights

- 🛡️ **Hard Invariants (The Floor)**: No meaningless purple gradients, no cards inside cards, no animation abuse (only `transform` and `opacity` allowed), and no invented metrics or fake testimonials.
- 🎯 **Ask Once**: No endless follow-up questions. A single round covering four key dimensions: **Material**, **Audience**, **Use**, and **Tone**.
- 📱 **Mobile Defense**: Enforced 44×44px minimum touch targets, `clamp()` responsive type scales that prevent mobile headline blowups, and tables that automatically degrade into cards — zero horizontal overflow.
- 🎨 **Style Library**: Six finely tuned, niche high-end aesthetic kits built in (Swiss Editorial, Tactical Dark, Quiet Luxury, Wabi-Sabi Paper, Industrial Brutalist, Cyber Blueprint).
- 🔄 **Redesign / Unslop**: Paste legacy code or a screenshot and get an automatic Floor-violation diagnosis plus a painless migration brief that preserves business logic while cleaning up the visuals.
- 🔌 **Target Model Adaptor**: Produces prompts tailored for **v0 / Bolt**, **Cursor / Devin / Windsurf**, or **Claude Artifacts**.

---

## Supported IDEs and AI Agents

CraftSpec ships with an out-of-the-box, cross-platform, multi-IDE architecture:

| Platform / Agent | Config and file locations | Activation |
| :--- | :--- | :--- |
| **Devin CLI / Desktop** | `.devin-plugin/plugin.json`, `skills/craftspec/SKILL.md` | `devin plugins install makeskills/craftspec` or type `/craftspec` |
| **Claude Code** | `.claude-plugin/plugin.json`, `CLAUDE.md` | Auto-loaded, or use `/craftspec` |
| **Cursor IDE** | `.cursor/rules/craftspec.mdc`, `.cursorrules` | Automatically active in edits and chat |
| **Windsurf / Cascade** | `.windsurfrules`, `AGENTS.md` | Auto-loaded as always-on project rules |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Copilot follows The Floor when generating code |
| **Generic Agent (skills.sh / OpenCode)** | `.agents/skills/craftspec/SKILL.md` | Follows the open Agent Plugins 1.0.0 spec |

---

## Project Structure

```text
craftspec/
├── .agents/skills/craftspec/ # Generic agent rules
├── .claude-plugin/           # Claude Code plugin manifest
├── .cursor/rules/            # Cursor MDC rules
├── .devin-plugin/            # Devin plugin manifest
├── .github/                  # GitHub Copilot instructions
├── skills/craftspec/         # Core skill definition (SKILL.md)
├── .cursorrules              # Root-level Cursor rules
├── .windsurfrules            # Root-level Windsurf rules
├── AGENTS.md                 # Always-on rules for all major agents
├── CLAUDE.md                 # Claude-specific guide
├── .gitignore                # Excludes sensitive files
├── vercel.json               # Domain and deployment config
└── README.md                 # Project documentation
```

---

## Installation and Usage

### Option A: Zero-install via npx (works in any project)

Run in your frontend project root:

```bash
# 1. Inject CraftSpec design rules into the current project
#    (generates .cursorrules, .windsurfrules, AGENTS.md, CLAUDE.md, and more)
npx @makeskills/craftspec init

# 2. Optimize a design brief directly in the terminal
npx @makeskills/craftspec "a dark, minimalist watch e-commerce site"
```

---

### Option B: Install as a Devin / Agent Plugin

Run in any terminal or IDE that supports Devin / Agent Plugins:

```bash
# Install from GitHub
devin plugins install makeskills/craftspec
```

For local development with hot updates:

```bash
# Local symlink install (changes take effect immediately)
devin plugins install --local ./
```

---

### Option C: Invoke inside your IDE / chat box

After installing, type `/` in the chat input and the `/craftspec` command appears automatically:

#### 1. Brand-new design request
```text
/craftspec build a modern brand site
```
The AI first shows the "Ask Once" four-dimension cards for you to pick from, then outputs a spec containing a Signature moment, design tokens, and a ready-to-use AI prompt.

#### 2. Redesign an existing page
```text
/craftspec redesign the current homepage and remove the AI template feel [attach code or a description]
```
The AI runs a Floor-violation diagnosis and produces a refactoring migration brief.

---

## License

MIT License.
