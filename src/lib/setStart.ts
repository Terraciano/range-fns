import type { Range } from './types';

// generic because we are keeping any extra properties from range
export const setStart = <P extends number, T extends Range<P>>(range: T, start: P): T => {
  return {
    ...range,
    start,
    end: Math.max(range.end, start),
  };
};
