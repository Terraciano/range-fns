import type { Range } from './types';

export const subtractFromRange = <P extends number, T extends Range<P>>(
  range: T,
  offsetBy: P,
): T => {return [range[0]-offsetBy,range[1]-offsetBy] as T};
