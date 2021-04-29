/**
* TODO: Check if can avoid literal types when casting without type
 *
* Creates a range from the provided arguments
*
* console.log(createRange<number>(5,10))  // {start: 5, end: 10}
*
* */


import type { Range } from './types';

export const createRange = <T extends number>(start: T, end: T): Range<T> => {
  return {
    start,
    end,
  } as Range<T>;
};
