import type { Range } from './types';

// generic because we are keeping any extra properties from range

export const setEnd = <P extends number, T extends Range<P>>(range: T, end: P): T => {
  return {
    ...range,
    start: Math.min(end, range.start) as P,
    end,
  };
};
