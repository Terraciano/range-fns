import { split } from './split';
import type { Range } from './types';

export const splitRangeByDuration = <T extends number>(
  range: Range<T>,
  duration: T,
): Array<Range<T>> => {
  return split(range, (range[0] + duration) as T);
};
