import React from 'react';
import { SubjectId, CognitiveLevel } from '../types/edu';
import { SUBJECTS_META } from '../data/curriculum';

interface TagProps {
  children: React.ReactNode;
  color?: string;
  tier?: CognitiveLevel;
}

const TIER_STYLES: Record<CognitiveLevel, string> = {
  'Nhận biết':
    'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
  'Thông hiểu':
    'bg-sky-500/10 text-sky-300 border-sky-500/25',
  'Vận dụng':
    'bg-amber-500/10 text-amber-300 border-amber-500/25',
  'Vận dụng cao':
    'bg-rose-500/10 text-rose-300 border-rose-500/25',
};

export function getDifficultyBadgeClasses(level: CognitiveLevel): string {
  return TIER_STYLES[level] ?? 'bg-zinc-900 text-zinc-300 border-zinc-800';
}

export const Tag: React.FC<TagProps> = ({ children, tier }) => {
  if (tier) {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-md border font-mono text-xs font-medium whitespace-nowrap ${getDifficultyBadgeClasses(
          tier
        )}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-zinc-800/80 bg-zinc-900/70 font-mono text-xs text-zinc-400 whitespace-nowrap">
      {children}
    </span>
  );
};

export const subjectColor = (s: SubjectId) => SUBJECTS_META[s].accentHex;
