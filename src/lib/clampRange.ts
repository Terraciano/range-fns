import { getDifference } from './getDifference';
import type { Range } from './types';

export const clampRange = <T extends number>(
  range: Range<T>,
  rangeLimit: Range<T>,
): Range<T> | null => {
  const newRange: Range<T> = {
    start: Math.max(range.start, rangeLimit.start) as T,
    end: Math.min(range.end, rangeLimit.end) as T,
  };

  const difference = getDifference(newRange);
  return difference > 0 ? newRange : null;
};

/*
* Returns a clamped range between two ranges passed, if invalid, returns null
*
* const myRange = createRange(5, 10);
* const limitRange = createRange(2, 7);
*
* console.log(clampRange(myRange,limitRange)) // {"start": 5,"end": 7}
*
* */
