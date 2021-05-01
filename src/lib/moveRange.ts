import type { Range } from './types';

// moves whole range to new start
export const moveRange = <T extends number>(range: Range<T>, newStart: T): Range<T> => {
  const difference = newStart - range[0];

  return {
    start: range[0] + difference,
    end: range[1] + difference,
  } as Range<T>;
};
