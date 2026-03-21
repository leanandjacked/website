<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes  APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-rules -->
## UI Rules

- **NEVER use custom scrollbar CSS** (`::-webkit-scrollbar`, `::-webkit-scrollbar-thumb`, etc.). It looks bad across operating systems and browsers. Always let the OS/browser render the native scrollbar.
- **NEVER use `onMouseOver` / `onMouseOut`** in server components. Use CSS `:hover` classes in `globals.css` instead.
<!-- END:ui-rules -->
