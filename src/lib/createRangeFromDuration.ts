import type { Range } from './types';

// TODO: invert arg order
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
