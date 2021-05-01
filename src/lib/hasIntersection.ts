/**
* Returns if there's an intersection between the given ranges
*
* const myRange = createRange (5, 10);
* const notInRange = createRange(11, 17);
* const inRange = createRange(7, 9);
*
* console.log(intersection(myRange, notInRange)) // false
* console.log(intersection(myRange, inRange)) // true
*
*
* */

import type { Range } from './types';

export const hasIntersection = <T extends number>(rangeA: Range<T>, rangeB: Range<T>) => {
  // todo: btw this implies that starts are before the end, which might not be the case
  return !(rangeA[1] <= rangeB[0] || rangeA[0] >= rangeB[1]);
};

