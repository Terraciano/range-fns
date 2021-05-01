/**
* Returns mathematical difference of a given range
*
** const myRange = createRange(5, 10);
*
* console.log(getDifference(myRange))  // 5
*
* */

import type { Range } from './types';

export const getDifference = <T extends number>(range: Range<T>): T => {
  return (range[1] - range[0]) as T;
};


