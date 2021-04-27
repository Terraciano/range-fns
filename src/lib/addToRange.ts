import type { Range } from './types';

export const addToRange = <T extends Range<number>>(range: T, offsetBy: number): T => {
  return {
    ...range,
    start: range.start + offsetBy,
    end: range.end + offsetBy,
  };
};
