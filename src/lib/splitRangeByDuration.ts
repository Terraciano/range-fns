import { splitRange } from './splitRange';
import type { Range } from './types';

export const splitRangeByDuration = <T extends number>(
  range: Range<T>,
  duration: T,
): Array<Range<T>> => {
  return splitRange(range, (range.start + duration) as T);
};
