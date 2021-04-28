import type { Range } from './types';

export const createRangeFromDuration = <T extends number>(
  duration: T,
  start = 0 as T,
): Range<T> => {
  const end = (start + duration) as T;

  return {
    start,
    end,
  };
};

/*
* Creates a range from a given duration
*
* console.log(createRange<number>(2,6))  // {start: 6, end: 8 }
*
* */
