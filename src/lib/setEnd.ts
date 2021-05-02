import type { Range } from './types';

export const setEnd = < P extends number, T extends Range<P>>(range: T, end: number): T => {
  return [Math.min(end,range[0]),end] as T
};
