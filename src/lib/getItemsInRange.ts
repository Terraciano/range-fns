/**
 * Given a range and an array of ranges, returns the ranges inside the range given in the first parameter
 *
 * const myRange = createRange<number>(5,10)
 * const myRangeArray:Array<Range<number>> = [[1,3],[5,8],[7,9]]
 *
 * console.log(getItemsInRange(myRange,myRangeArray)) //[[5,8],[7,9]]
 *
 */


import { hasIntersection } from './hasIntersection';
import type { Range } from './types';

export const getItemsInRange = <P extends number, T extends Range<P>>(
  range: T,
  items: Array<T>,
) => {
  return items.filter((item) => {
    return hasIntersection(range,item );
  });
};
