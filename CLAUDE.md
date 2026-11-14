# CraftSpec Guidelines for Claude Code

When writing frontend code or discussing UI/UX design:
1. Always apply **The Floor**:
   - Never use `transition: all` or animate `width/height/top/left`. Only animate `transform` and `opacity`.
   - Never use purple-to-blue gradients, card-inside-a-card layouts, or emoji icons.
   - Never invent fake metrics, fake reviews, or placeholder customer logos.
   - Ensure all touch targets are at least 44x44px.
   - Maintain the 1280x800 first-screen rule (headline, one sentence, and primary CTA visible without scrolling).
2. When asked for design suggestions or code:
   - Provide concrete design tokens (`:root` / Tailwind config).
   - Define a unique **Signature Moment** for the page.
   - Use standard typography hierarchies and genuine whitespace.
