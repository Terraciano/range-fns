import type { Range } from './types';

// is rangeA intersecting rangeB
export const isInRange = <T extends number>(rangeA: Range<T>, rangeB: Range<T>) => {
  // todo: btw this implies that starts are before the end, which might not be the case
  return !(rangeA.end <= rangeB.start || rangeA.start >= rangeB.end);
};
