import type { Range } from './types';

export const isTimeInRange = <T extends number>(time: T, range: Range<T>) => {
  return time >= range[0] && time <= range[1];
};
