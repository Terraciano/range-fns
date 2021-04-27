import { getRangeDuration } from './getRangeDuration';
import { createRangeFromDuration } from './createRangeFromDuration';
import type { Range } from './types';

// given a range and a number of loops, what is the resulting range?

export const getLoopedRange = <T extends number>(range: Range<T>, loops: number): Range<T> => {
  const times = Math.max(0, loops + 1);
  const newDuration = (getRangeDuration(range) * times) as T;
  return createRangeFromDuration(newDuration, range.start);
};
