import type { Range } from './types';

export const setStart = < T extends Range<number>>(range: T, start: number): T => {
  return {
    start,
    end: Math.max(range[1], start),
  }as T;
};
