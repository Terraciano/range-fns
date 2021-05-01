import type { Range } from './types';

export const subtractFromRange = <P extends number, T extends Range<P>>(
  range: T,
  offsetBy: P,
): T => {
  return {
    ...range,
    start: range[0] - offsetBy,
    end: range[1] - offsetBy,
  };
};
