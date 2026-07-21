# Klara product website - design spec

Date: 2026-07-21
Status: approved autonomously (session goal mode); user review welcome after delivery

## Goal

A standalone marketing website for **Klara: bezpieczny chat AI**, based on the existing
flyer `klara_bezpieczny_chat_AI.html`. The site presents the product and its benefits
more visually than the flyer and includes an **interactive simulation** of Klara's
routing mechanics (query analysis → local model vs external model).

## Constraints (from CLAUDE.md + global prefs)

- Single self-contained `.html` file, inline CSS + JS, no build step, works from `file://`
  (CDN fonts/Lucide allowed, same as flyer). File: `klara_website.html` in this directory
  so it reuses the sibling logo PNGs.
- Quantica Lab brand: pink `#d20757` hero color, Satoshi + Geist Mono, Lucide icons only,
  no emoji, no exclamation marks, sentence case, Polish hyphens ` - `, near-black `#111111`,
  cards with full borders (never left-accent stripes), feature grids with flexbox.
- **Marketing copy is immutable**: all body copy verbatim from the flyer, no invented
  marketing claims. Simulation demo prompts/status labels are UI demo data, kept minimal
  and derived from flyer language where possible.
- Plain state object + render function (no framework). Script order:
  Constants → State → DOM refs → Helpers → Render → Listeners → Init.
- Keyboard accessible, ARIA live region for simulation status, `prefers-reduced-motion`
  respected. Motion: fades/slides only. Responsive breakpoint 768px.

## Page structure

1. **Nav** - fixed, logo + anchor links (Jak działa, Symulacja, Możliwości, Korzyści) + contact pill.
2. **Hero** - dark navy with pink/violet radial gradients, grid overlay, Q-mark;
   title "Klara", subtitle "bezpieczny chat AI", tagline from cover; CTA pills.
3. **Problem / intro** - flyer page 2 paragraphs (shadow AI) + violet key-statement note,
   visually split with an illustrative stat-free layout (icon cards for the risk factors
   are drawn from the sentences themselves).
4. **Jak działa Klara** - the interactive simulation (see below) plus the two routing
   callouts and branch copy from the flyer.
5. **Co potrafi Klara?** - the 4 capability panels as icon cards (flexbox grid).
6. **Co zyskuje organizacja?** - the 4 numbered benefits, large digits.
7. **Contact** - dark CTA card identical in content to the flyer contact block.

## Simulation design

A routing simulator: user picks one of three example prompts (buttons), or presses
"start" to auto-cycle. A packet animates from a chat-input mock through an
"analiza zapytania" node, then branches:

- Prompt with confidential data → **model lokalny** path; external path shows blocked state.
- Simple routine prompt → **model lokalny** path (cost-efficient).
- Complex prompt → **model zewnętrzny (GPT, Gemini)** path.

A mono-font status log narrates the steps; destination cards highlight; a small
"koszt" indicator distinguishes local (niski) vs external (wykorzystywany tylko gdy
potrzebny). Implemented as a finite state machine with timed phases; CSS transitions
for the packet; ARIA live region announces each phase; reduced-motion users get
instant state changes.

## Verification

- Serve via `python3 -m http.server`, inspect in Chrome (desktop + 768px), run the
  simulation through all three prompts, check console for errors.
- Added/dropped-text check of body copy against the flyer.
