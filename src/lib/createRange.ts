import type { Range } from './types';

export const createRange = <T extends number>(start: T, end: T): Range<T> => {
  return {
    start,
    end,
  } as Range<T>;
};
 /*
 * Creates a range from the provided arguments
 *
 * console.log(createRange<number>(5,10))  // {start: 5, end: 10}
 *
 * */
