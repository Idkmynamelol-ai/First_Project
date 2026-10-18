import React from 'react';
import { SubjectId } from '../types/edu';
import { SUBJECTS_META } from '../data/curriculum';

interface TagProps {
  children: React.ReactNode;
  color?: string;
}

/** Monospace metadata chip without numeric CP ratings */
export const Tag: React.FC<TagProps> = ({ children, color }) => (
  <span
    className="inline-flex items-center px-2 py-0.5 border font-mono text-xs whitespace-nowrap"
    style={
      color
        ? { color, borderColor: `${color}66`, backgroundColor: `${color}14` }
        : { color: '#A3A3A3', borderColor: '#262626', backgroundColor: '#0A0A0A' }
    }
  >
    {children}
  </span>
);

export const subjectColor = (s: SubjectId) => SUBJECTS_META[s].accentHex;
