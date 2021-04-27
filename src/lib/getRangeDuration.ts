import type { Range } from './types';

export const getRangeDuration = <T extends number>(range: Range<T>): T => {
  return (range.end - range.start) as T;
};
