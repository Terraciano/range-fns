/**
 * Given a range and an amount of times to loop, returns the resulting range
 * const myRange = createRange<number>(5,10)
 *
 * console.log(getLoopedRange(myRange,3)) // [5,25]
 */

import { getDifference } from './getDifference';
import { createRangeFromDuration } from './createRangeFromDuration';
import type { Range } from './types';

export const getLoopedRange = <T extends number>(range: Range<T>, loops: number): Range<T> => {
  const times = Math.max(0, loops + 1);
  const newDuration = (getDifference(range) * times) as T;
  return createRangeFromDuration(newDuration, range[0]);
};
