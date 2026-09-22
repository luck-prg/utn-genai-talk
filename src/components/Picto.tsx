import type { ReactNode } from "react";

/**
 * Small stroke-based line pictograms used across the deck's slide cards.
 * One 0-0-48-48 SVG per `PictoName`, drawn with the deck's line-icon style:
 * `currentColor` stroke, no fill, round caps/joins, with at most one small
 * accent-colored detail (a dot, a short stroke, or a tiny filled shape).
 */
export type PictoName =
  // Bloque 2.1.3 · Skill
  | "drift"
  | "repeat"
  | "tired"
  | "package"
  | "ask"
  | "edge"
  | "silent"
  | "layers"
  | "label"
  | "match"
  | "compete"
  | "script"
  | "judgment"
  | "lock"
  // Resto del mazo
  | "path"
  | "ledger"
  | "handoff"
  | "early"
  | "test"
  | "behavior"
  | "domain"
  | "contract"
  | "wrong"
  | "why"
  | "rules"
  | "write"
  | "alive"
  | "propagate"
  | "spec"
  | "source"
  | "run"
  | "patch"
  | "spike"
  | "once"
  | "feature"
  | "maintain"
  | "scratch"
  | "bloat"
  | "loop"
  | "files"
  | "fire"
  | "constitution"
  | "plan"
  | "tasks"
  | "implement"
  | "human"
  | "observe"
  | "idea"
  | "analyze"
  | "wall";

const ICONS: Record<PictoName, ReactNode> = {
  // --- Bloque 2.1.3 · Skill ---
  // One request, three different outcomes.
  drift: (
    <>
      <circle cx="9" cy="24" r="3.2" />
      <path d="M13 23 L30 12" />
      <path d="M13 24 H30" />
      <path d="M13 25 L30 36" />
      <rect x="32" y="8" width="8" height="8" rx="1.5" />
      <rect x="32" y="20" width="8" height="8" rx="1.5" stroke="var(--color-acento)" />
      <rect x="32" y="32" width="8" height="8" rx="1.5" />
    </>
  ),
  // Saying the same thing over and over.
  repeat: (
    <>
      <path d="M10 20 a14 14 0 0 1 24 -6" />
      <path d="M38 28 a14 14 0 0 1 -24 6" />
      <path d="M34 6 v8 h-8" />
      <path d="M14 42 v-8 h8" />
      <circle cx="24" cy="24" r="2.6" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  // The cost of repeating it: the same paragraph, pasted again.
  tired: (
    <>
      <rect x="8" y="6" width="22" height="28" rx="2" />
      <line x1="14" y1="14" x2="24" y2="14" />
      <line x1="14" y1="20" x2="24" y2="20" />
      <rect x="18" y="16" width="22" height="26" rx="2" stroke="var(--color-acento)" />
    </>
  ),
  // A skill: a folder holding one document plus its resources.
  package: (
    <>
      <path d="M5 40 V12 a2 2 0 0 1 2 -2 h11 l4 5 h19 a2 2 0 0 1 2 2 v23 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 Z" />
      <path d="M18 24 h12" stroke="var(--color-acento)" />
      <path d="M18 31 h8" />
    </>
  ),
  // The questions it is not allowed to skip.
  ask: (
    <>
      <path d="M8 10 a2 2 0 0 1 2 -2 h28 a2 2 0 0 1 2 2 v20 a2 2 0 0 1 -2 2 H20 l-9 8 v-8 h-1 a2 2 0 0 1 -2 -2 Z" />
      <path d="M20 16 a4 4 0 1 1 4 5 v2" stroke="var(--color-acento)" />
      <circle cx="24" cy="27" r="1.4" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  // Edge cases: the corner nobody looks at.
  edge: (
    <>
      <path d="M8 40 V8 h32" />
      <path d="M8 40 H40 V8" strokeDasharray="4 4" />
      <path d="M32 32 l8 8" stroke="var(--color-acento)" />
      <circle cx="36" cy="36" r="2.2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  // Written, shipped, and never read.
  silent: (
    <>
      <rect x="9" y="6" width="26" height="34" rx="2" />
      <line x1="16" y1="16" x2="28" y2="16" />
      <line x1="16" y1="23" x2="28" y2="23" />
      <line x1="16" y1="30" x2="22" y2="30" />
      <path d="M8 44 L42 4" stroke="var(--color-acento)" />
    </>
  ),
  // Progressive disclosure: three levels, only the top one always loaded.
  layers: (
    <>
      <path d="M24 6 L42 15 L24 24 L6 15 Z" stroke="var(--color-acento)" />
      <path d="M6 24 L24 33 L42 24" />
      <path d="M6 33 L24 42 L42 33" />
    </>
  ),
  // The description field: the label the agent reads first.
  label: (
    <>
      <path d="M6 20 V9 a3 3 0 0 1 3 -3 h11 l21 21 a3 3 0 0 1 0 4 L28 44 a3 3 0 0 1 -4 0 L6 26 Z" />
      <circle cx="15" cy="15" r="3" stroke="var(--color-acento)" />
    </>
  ),
  // The user's words meeting the skill's words.
  match: (
    <>
      <circle cx="18" cy="24" r="11" />
      <circle cx="30" cy="24" r="11" stroke="var(--color-acento)" />
      <path d="M21 20 l2.5 3 l4 -5" />
    </>
  ),
  // Two skills reaching for the same job.
  compete: (
    <>
      <rect x="6" y="10" width="15" height="19" rx="2" />
      <rect x="27" y="10" width="15" height="19" rx="2" />
      <path d="M17 38 L24 32 L31 38" stroke="var(--color-acento)" />
      <circle cx="24" cy="42" r="2.2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  // A script: fixed steps, run as-is.
  script: (
    <>
      <rect x="5" y="9" width="38" height="30" rx="3" />
      <line x1="5" y1="17" x2="43" y2="17" />
      <path d="M13 25 l5 4 l-5 4" stroke="var(--color-acento)" />
      <line x1="23" y1="33" x2="34" y2="33" />
    </>
  ),
  // Judgment: weighing one option against another.
  judgment: (
    <>
      <path d="M24 8 v32" />
      <path d="M10 16 H38" />
      <path d="M4 30 a6 6 0 0 0 12 0 L10 16 Z" />
      <path d="M32 30 a6 6 0 0 0 12 0 L38 16 Z" />
      <circle cx="24" cy="8" r="2.4" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  // What the skill is allowed to touch.
  lock: (
    <>
      <rect x="10" y="21" width="28" height="21" rx="3" />
      <path d="M17 21 v-6 a7 7 0 0 1 14 0 v6" />
      <circle cx="24" cy="30" r="2.6" fill="var(--color-acento)" stroke="none" />
      <path d="M24 33 v4" stroke="var(--color-acento)" />
    </>
  ),

  // --- Resto del mazo ---
  path: (
    <>
      <path d="M4 42 H14 V32 H24 V22 H34 V12 H44" />
      <path d="M26 17 h5 l-2 -2 m2 2 l-2 2" stroke="var(--color-acento)" />
      <circle cx="19" cy="27" r="2.4" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  ledger: (
    <>
      <rect x="10" y="6" width="26" height="36" rx="2" />
      <line x1="16" y1="16" x2="30" y2="16" />
      <line x1="16" y1="24" x2="30" y2="24" />
      <line x1="16" y1="32" x2="24" y2="32" />
    </>
  ),
  handoff: (
    <>
      <circle cx="10" cy="14" r="5" />
      <path d="M4 34 Q4 24 10 24 Q16 24 16 34" />
      <circle cx="38" cy="14" r="5" />
      <path d="M32 34 Q32 24 38 24 Q44 24 44 34" />
      <rect x="19" y="20" width="10" height="7" rx="1.5" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  early: (
    <>
      <path d="M4 34 H44" />
      <path d="M24 34 V30 M36 34 V30" />
      <circle cx="12" cy="20" r="9" />
      <path d="M12 15 V22" stroke="var(--color-acento)" />
      <circle cx="12" cy="25.5" r="1.4" fill="var(--color-acento)" stroke="none" />
      <path d="M12 29 V34" />
    </>
  ),
  test: (
    <>
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <path d="M16 24 L22 30 L34 16" stroke="var(--color-acento)" />
    </>
  ),
  behavior: (
    <>
      <rect x="6" y="8" width="34" height="22" rx="6" />
      <path d="M14 30 L14 38 L22 30" />
      <path d="M14 19 H30 M24 14 L30 19 L24 24" stroke="var(--color-acento)" />
    </>
  ),
  domain: (
    <>
      <circle cx="12" cy="14" r="4" />
      <circle cx="36" cy="14" r="4" />
      <circle cx="24" cy="36" r="4" fill="var(--color-acento)" stroke="none" />
      <line x1="15" y1="17" x2="21" y2="33" />
      <line x1="33" y1="17" x2="27" y2="33" />
      <line x1="16" y1="14" x2="32" y2="14" />
    </>
  ),
  contract: (
    <>
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <line x1="16" y1="16" x2="32" y2="16" />
      <line x1="16" y1="24" x2="32" y2="24" />
      <path d="M16 34 q3 -6 6 0 q3 -6 6 0 q3 -6 6 0" stroke="var(--color-acento)" />
    </>
  ),
  wrong: (
    <>
      <circle cx="34" cy="24" r="10" />
      <rect x="10" y="14" width="16" height="16" rx="2" />
      <line x1="6" y1="6" x2="42" y2="42" stroke="var(--color-acento)" />
    </>
  ),
  why: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path
        d="M18 18 a6 6 0 1 1 9 5.2 c-2 1.3 -3 2.6 -3 5.3"
        stroke="var(--color-acento)"
      />
      <circle cx="24" cy="34" r="1.6" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  rules: (
    <>
      <path d="M8 24 C8 12 20 8 24 16 C28 24 36 10 40 18 C44 26 32 34 24 28 C16 22 8 36 8 24 Z" />
      <circle cx="24" cy="24" r="2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  write: (
    <>
      <path d="M10 38 L14 38 L38 14 a4 4 0 0 0 -6 -6 L8 32 Z" />
      <line x1="30" y1="12" x2="36" y2="18" stroke="var(--color-acento)" />
    </>
  ),
  alive: (
    <>
      <path d="M4 24 H14 L18 12 L24 36 L30 16 L34 24 H44" />
      <circle cx="18" cy="12" r="2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  propagate: (
    <>
      <path d="M10 24 L36 10 M10 24 L36 24 M10 24 L36 38" />
      <circle cx="36" cy="10" r="2.5" />
      <circle cx="36" cy="24" r="2.5" />
      <circle cx="36" cy="38" r="2.5" />
      <circle cx="10" cy="24" r="2.5" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  spec: (
    <>
      <rect x="8" y="6" width="30" height="36" rx="2" />
      <path d="M16 16 a4 4 0 1 1 6 3.4 q-2 1 -2 3.4" stroke="var(--color-acento)" />
      <line x1="16" y1="30" x2="32" y2="30" />
      <line x1="16" y1="36" x2="32" y2="36" />
    </>
  ),
  source: (
    <>
      <rect x="10" y="8" width="28" height="34" rx="2" />
      <line x1="16" y1="30" x2="32" y2="30" />
      <line x1="16" y1="36" x2="26" y2="36" />
      <path
        d="M24 12 l2.2 4.5 5 0.7 -3.6 3.5 0.85 5 -4.45 -2.3 -4.45 2.3 0.85 -5 -3.6 -3.5 5 -0.7 Z"
        fill="var(--color-acento)"
        stroke="none"
      />
    </>
  ),
  run: (
    <>
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <path d="M20 18 L32 24 L20 30 Z" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  patch: (
    <>
      <line x1="10" y1="34" x2="20" y2="14" />
      <line x1="28" y1="34" x2="38" y2="14" />
      <path d="M21 24 h6 M24 21 v6" stroke="var(--color-acento)" />
    </>
  ),
  spike: (
    <>
      <path d="M18 6 H30 M20 6 V16 L10 36 a4 4 0 0 0 4 6 H34 a4 4 0 0 0 4 -6 L28 16 V6" />
      <path d="M22 22 l4 6 h-3 l4 6" stroke="var(--color-acento)" />
    </>
  ),
  once: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M20 16 L24 14 L24 34" />
      <line x1="10" y1="38" x2="16" y2="32" stroke="var(--color-acento)" />
    </>
  ),
  feature: (
    <>
      <path d="M24 8 V40 M8 24 H40" />
      <path
        d="M36 10 l1.5 3.5 L41 15 l-3.5 1.5 L36 20 l-1.5 -3.5 L31 15 l3.5 -1.5 Z"
        fill="var(--color-acento)"
        stroke="none"
      />
    </>
  ),
  maintain: (
    <>
      <circle cx="16" cy="16" r="7" />
      <line x1="21" y1="21" x2="36" y2="36" />
      <circle cx="16" cy="16" r="2.5" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  scratch: (
    <>
      <path d="M24 40 V22" />
      <path d="M24 22 C14 22 12 12 12 12 C12 12 22 12 24 22" />
      <path d="M24 22 C34 22 36 12 36 12 C36 12 26 12 24 22" />
      <circle cx="24" cy="40" r="2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  bloat: (
    <>
      <rect x="10" y="8" width="24" height="30" rx="2" />
      <line x1="15" y1="16" x2="29" y2="16" />
      <line x1="15" y1="22" x2="29" y2="22" />
      <line x1="15" y1="28" x2="29" y2="28" />
      <path d="M34 34 q6 0 6 6 q0 -6 6 0" stroke="var(--color-acento)" />
    </>
  ),
  loop: (
    <>
      <path d="M10 24 a14 14 0 1 1 4 10" />
      <path d="M6 30 L14 34 L12 24" />
      <path d="M18 24 L22 28 L30 18" stroke="var(--color-acento)" />
    </>
  ),
  files: (
    <>
      <rect x="8" y="14" width="22" height="28" rx="2" />
      <rect x="14" y="8" width="22" height="28" rx="2" />
      <line x1="28" y1="16" x2="36" y2="24" stroke="var(--color-acento)" />
      <line x1="36" y1="16" x2="28" y2="24" stroke="var(--color-acento)" />
    </>
  ),
  fire: (
    <>
      <path d="M24 6 C14 18 14 26 20 32 C18 26 22 22 24 20 C26 26 22 28 24 34 C30 30 34 24 30 16 C30 22 27 22 27 18 C27 12 26 8 24 6 Z" />
      <circle cx="24" cy="30" r="2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  constitution: (
    <>
      <line x1="12" y1="10" x2="36" y2="10" />
      <line x1="12" y1="38" x2="36" y2="38" />
      <line x1="18" y1="14" x2="18" y2="34" />
      <line x1="30" y1="14" x2="30" y2="34" />
      <circle cx="24" cy="10" r="1.8" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  plan: (
    <>
      <rect x="6" y="8" width="36" height="32" rx="2" />
      <path d="M12 32 C18 20 26 34 36 16" stroke="var(--color-acento)" />
      <circle cx="12" cy="32" r="2" />
      <circle cx="36" cy="16" r="2" />
    </>
  ),
  tasks: (
    <>
      <rect x="10" y="10" width="9" height="9" rx="2" />
      <line x1="23" y1="14.5" x2="38" y2="14.5" />
      <rect x="10" y="24" width="9" height="9" rx="2" />
      <path d="M12 28.5 l2.5 2.5 l4.5 -5.5" stroke="var(--color-acento)" />
      <line x1="23" y1="28.5" x2="38" y2="28.5" />
      <line x1="10" y1="38" x2="38" y2="38" />
    </>
  ),
  implement: (
    <>
      <path d="M18 12 L8 24 L18 36" />
      <path d="M30 12 L40 24 L30 36" />
      <line x1="26" y1="10" x2="20" y2="38" stroke="var(--color-acento)" />
    </>
  ),
  observe: (
    <>
      <path d="M4 24 c6 -9 13 -13 20 -13 s14 4 20 13 c-6 9 -13 13 -20 13 s-14 -4 -20 -13 Z" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="2" fill="var(--color-acento)" stroke="none" />
    </>
  ),
  idea: (
    <>
      <path d="M17 30 a11 11 0 1 1 14 0 v4 H17 Z" />
      <path d="M19 40 H29" />
      <path d="M24 4 V8 M9 13 l3 2 M39 13 l-3 2" stroke="var(--color-acento)" />
    </>
  ),
  analyze: (
    <>
      <path d="M6 40 H42" />
      <path d="M12 34 V24 M22 34 V14 M32 34 V20" />
      <path d="M8 18 L20 10 L30 16 L42 6" stroke="var(--color-acento)" />
    </>
  ),
  wall: (
    <>
      <path d="M6 10 H42 V38 H6 Z" />
      <path d="M6 19 H42 M6 28 H42 M16 10 V19 M32 10 V19 M24 19 V28 M14 28 V38 M34 28 V38" />
      <path d="M27 10 l-5 7 l5 6 l-6 8 l4 7" stroke="var(--color-acento)" strokeWidth={3.2} />
    </>
  ),
  human: (
    <>
      <path d="M14 40 V22 a3 3 0 0 1 6 0 V16 a3 3 0 0 1 6 0 V14 a3 3 0 0 1 6 0 V18 a3 3 0 0 1 6 0 V30 a10 10 0 0 1 -10 10 H18 a4 4 0 0 1 -4 -4 Z" />
      <circle cx="24" cy="30" r="1.8" fill="var(--color-acento)" stroke="none" />
    </>
  ),
};

export function Picto({ name, className }: { name: PictoName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "clamp(40px, 3.8vw, 76px)", height: "auto", display: "block" }}
    >
      {ICONS[name]}
    </svg>
  );
}
