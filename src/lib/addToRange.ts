/**
* Returns a new range adding an offset to an existing range
* const myRange = createRange(5, 10);
*
* console.log(addToRange(myRange, 10))  // [15, 20]
*
* */

import type {Range} from './types';

export const addToRange = <T extends Range<number>>(range: T, offsetBy: number): T => {
  return [
     range[0] + offsetBy,
     range[1] + offsetBy,
] as T
};


