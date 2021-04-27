import type { Range } from './types';

export const isTimeInRange = <T extends number>(time: T, range: Range<T>) => {
  return time >= range.start && time <= range.end;
};
