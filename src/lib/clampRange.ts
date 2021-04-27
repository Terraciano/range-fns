import { getDifference } from './getDifference';
import type { Range } from './types';

// might clamp to an invalid duration, so might return null
export const clampRange = <T extends number>(
  range: Range<T>,
  rangeLimit: Range<T>,
): Range<T> | null => {
  const newRange: Range<T> = {
    start: Math.max(range.start, rangeLimit.start) as T,
    end: Math.min(range.end, rangeLimit.end) as T,
  };

  const duration = getDifference(newRange);
  return duration > 0 ? newRange : null;
};
