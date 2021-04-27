import type { Range } from './types';

// moves whole range to new start
export const moveRange = <T extends number>(range: Range<T>, newStart: T): Range<T> => {
  const difference = newStart - range.start;

  return {
    start: range.start + difference,
    end: range.end + difference,
  } as Range<T>;
};
