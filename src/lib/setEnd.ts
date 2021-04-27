import type { Range } from './types';

export const setEnd = < T extends Range<number>>(range: T, end: number): T => {
  return {
    start: Math.min(end, range.start),
    end,
  } as T;
};
