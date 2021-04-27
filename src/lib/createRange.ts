import type { Range } from './types';

export const createRange = <T extends number>(start: T, end: T): Range<T> => {
  return {
    start,
    end,
  } as Range<T>;
};
