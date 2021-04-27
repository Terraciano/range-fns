import type { Range } from './types';

// generic because we are keeping any extra properties from range

export const setEnd = < T extends Range<number>>(range: T, end: number): T => {
  return {
    ...range,
    start: Math.min(end, range.start),
    end,
  } as T;
};
