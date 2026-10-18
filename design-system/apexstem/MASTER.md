# Design System Master File — ApexSTEM (EdTech & Socratic AI Tutor Platform)

> **LOGIC:** When building a specific page, first check `design-system/apexstem/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

## Global Rules & Visual Direction

- **Project:** ApexSTEM — High School STEM & English Educational Analytics & Socratic AI Tutor (Grades 10–12 / Lớp 10, 11, 12)
- **Visual Style:** Modern Bento Grid + Soft UI Evolution (High legibility, dark mode default with clean contrast, subtle `1px` borders, zero chaotic AI-neon gradients)
- **Tech Stack:** React, Vite, Tailwind CSS, Lucide React (SVG icons), KaTeX (Math & Science formula rendering)

---

## Color Palette & Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0B0F17` | Deep slate / navy black primary background |
| `--bg-card` | `#131B2E` | Card surface with `1px border border-slate-800/80` (`#1E293B`) |
| `--bg-elevated` | `#19233C` | Hover / elevated interactive card or modal surface |
| `--text-primary` | `#F8FAFC` | Primary text (High contrast > 7:1 on `#0B0F17` and `#131B2E`) |
| `--text-muted` | `#94A3B8` | Secondary descriptions, labels, metadata |
| `--text-subtle` | `#64748B` | Subtle hints, timestamps, disabled labels |
| `--accent-math` | `#38BDF8` | Math (Toán học) — Electric Sky Blue |
| `--accent-physics` | `#818CF8` | Physics (Vật lý) — Indigo Violet |
| `--accent-chemistry` | `#34D399` | Chemistry (Hóa học) — Emerald Mint |
| `--accent-english` | `#FBBF24` | English (Tiếng Anh) — Amber Gold |
| `--cta-primary` | `#6366F1` | Interactive / CTA Indigo primary (`hover:bg-indigo-500`) |
| `--diagnostic-amber` | `#F59E0B` | Socratic Diagnostic conceptual/unit warning accent |
| `--diagnostic-rose` | `#F43F5E` | Socratic Diagnostic error alert accent |

---

## Typography

- **Primary Sans:** `Plus Jakarta Sans` / `Inter`, system-ui sans-serif
- **Monospace (Equations & Code):** `JetBrains Mono`, monospace
- **Base Body Size:** Minimum `16px` (`1rem`, `text-base`) on all form inputs and body text to prevent iOS Safari auto-zoom on input focus and ensure effortless readability.
- **Line Width & Wrapping:** All text reflows cleanly at `375px` mobile widths without clipping or unintended horizontal scroll.

---

## Dual-Viewport Adaptive Architecture

### 1. Mobile (`< 768px`)
- **Sticky Top Bar:** App title, active grade & subject badge, and Settings / BYOK key status trigger. Respects `pt-[env(safe-area-inset-top)]`.
- **Sticky Bottom Navigation Bar:** `h-16` with `pb-[env(safe-area-inset-bottom)]`, housing 4–5 core touch targets (`Home`, `Subjects`, `Practice`, `AI Chat`, `Analytics`). Each button has a minimum hit area of `44x44px` and `8px+` (`gap-2`) spacing.
- **AI Chat Mobile View:** Full-viewport height structure with fixed bottom input bar, single-row horizontal snap-scrolling suggestion chips (`overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap`), and auto-growing textarea (`max-h-32`, `text-base`).

### 2. Desktop (`>= 1024px`)
- **Collapsible Sidebar (`w-64`):** Full subject navigation (Math, Physics, Chemistry, English), grade selector (`Lớp 10`, `Lớp 11`, `Lớp 12`), recent Socratic sessions, and persistent student mastery summary.
- **Fluid Multi-Column Bento Grid:** 3-column Bento grid on Dashboard combining summary stats, subject mastery rings/bars, daily practice recommendations, and live Socratic tutor quick-launch widget.
- **Split-Pane AI Tutor View:** Left pane shows active problem statement, interactive diagram, and KaTeX formula reference sheet (with 1-click "Copy Formula" buttons); Right pane shows the Socratic AI conversation.

---

## Micro-Interactions & Accessibility Checklist (UI UX Pro Max)

- [x] **No Decorative Emojis as Icons:** Strictly use `lucide-react` vector SVG icons with `aria-hidden="true"` when paired with text, or `aria-label` on icon-only controls.
- [x] **Subtle Hover Lifts:** Interactive cards use `transition-all duration-200 hover:-translate-y-0.5` without layout jitter.
- [x] **Accessible Focus Rings:** All interactive elements include `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17]`.
- [x] **Zero Horizontal Overflow:** Root and body containers enforce `overflow-x-hidden`.
- [x] **Touch Target Compliance:** All buttons, radio pills, and nav items meet `min-h-[44px] min-w-[44px]`.
