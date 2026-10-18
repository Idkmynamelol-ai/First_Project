export type DailySubject = 'math' | 'physics' | 'chemistry' | 'english';

/**
 * Validates whether a string is in strict YYYY-MM-DD calendar format.
 */
export function isValidDateString(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

/**
 * Returns the current date string (YYYY-MM-DD) in Asia/Ho_Chi_Minh (UTC+7).
 * Guarantees automatic rollover at 00:00:00 ICT without cron jobs or DB writes.
 */
export function getCurrentDateICT(now: Date = new Date()): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const formatted = formatter.format(now);
    if (isValidDateString(formatted)) {
      return formatted;
    }
  } catch {
    /* fallback to manual UTC+7 offset below */
  }
  const ictTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const y = ictTime.getUTCFullYear();
  const m = String(ictTime.getUTCMonth() + 1).padStart(2, '0');
  const d = String(ictTime.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Deterministically hashes a `${dateStr}:${subject}` string into a 32-bit unsigned integer seed.
 * Uses FNV-1a 32-bit combined with MurmurHash3 finalizer avalanche so adjacent dates
 * (e.g. "2026-10-17:math" vs "2026-10-18:math") produce well-distributed seeds.
 */
export function hashDateSubjectSeed(
  dateStr: string,
  subject: DailySubject
): number {
  const key = `${dateStr.trim()}:${subject}`;
  let h = 0x811c9dc5; // FNV-1a 32-bit offset basis
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  // MurmurHash3 32-bit finalizer mix
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

/**
 * Mulberry32 deterministic pseudorandom number generator.
 * Returns a function that yields floats in [0, 1) from a 32-bit unsigned integer seed.
 */
export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return function random(): number {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Deterministically selects the daily question index for a given date (YYYY-MM-DD),
 * subject, and question bank length.
 */
export function getDeterministicQuestionIndex(
  dateStr: string,
  subject: DailySubject,
  questionCount: number
): { seed: number; index: number; randomValue: number } {
  if (questionCount <= 0) {
    throw new Error(`Question bank for subject "${subject}" cannot be empty.`);
  }
  const seed = hashDateSubjectSeed(dateStr, subject);
  const random = mulberry32(seed);
  const randomValue = random();
  const index = Math.floor(randomValue * questionCount);
  return { seed, index, randomValue };
}

/**
 * Generates a deterministic submission token for a given date, subject, and problemId.
 */
export function createSubmissionToken(
  dateStr: string,
  subject: DailySubject,
  problemId: string
): string {
  const seed = hashDateSubjectSeed(dateStr, subject);
  let h = seed;
  for (let i = 0; i < problemId.length; i++) {
    h ^= problemId.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `gdpt2018-${dateStr}-${subject}-${h.toString(16).padStart(8, '0')}`;
}
