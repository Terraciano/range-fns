/**
* Returns a clamped range between two ranges passed, if invalid, returns null
*
* const myRange = createRange(5, 10);
* const limitRange = createRange(2, 7);
*
* console.log(clampRange(myRange,limitRange)) // {"start": 5,"end": 7}
*
* */

import { getDifference } from './getDifference';
import type { Range } from './types';

export const clampRange = <T extends number>(
  range: Range<T>,
  rangeLimit: Range<T>,
): Range<T> | null => {
  const newRange: Range<T> = [
    Math.max(range[0], rangeLimit[0]) as T,
     Math.min(range[1], rangeLimit[1]) as T,
  ];

  const difference = getDifference(newRange);
  return difference > 0 ? newRange : null;
};


