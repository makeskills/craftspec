# GitHub Copilot Instructions for CraftSpec

When generating UI, CSS, or frontend components:
- **Animations**: Do not use `transition: all`. Only animate `transform` and `opacity`.
- **Anti-Slop**: Avoid generic AI styles such as purple gradients, glowing borders, or stacked cards.
- **Truthful Data**: Do not invent fake user numbers, customer logos, or ratings.
- **Mobile First**: Touch targets must be at least 44x44px. Prevent horizontal overflow on mobile screens.
- **Design Tokens**: Declare colors and typography tokens cleanly instead of hardcoding random hex values.
