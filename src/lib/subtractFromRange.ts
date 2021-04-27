import type { Range } from './types';

export const subtractFromRange = <P extends number, T extends Range<P>>(
  range: T,
  offsetBy: P,
): T => {
  return {
    ...range,
    start: range.start - offsetBy,
    end: range.end - offsetBy,
  };
};
