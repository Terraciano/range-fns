import type { Range } from './types';

// generic because we are keeping any extra properties from range
export const setStart = < T extends Range<number>>(range: T, start: number): T => {
  return {
    start,
    end: Math.max(range.end, start),
  }as T;
};
