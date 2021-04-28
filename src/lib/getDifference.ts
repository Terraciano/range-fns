import type { Range } from './types';

export const getDifference = <T extends number>(range: Range<T>): T => {
  return (range.end - range.start) as T;
};

/*
* Returns mathematical difference of a given range
*
** const myRange = createRange(5, 10);
*
* console.log(getDifference(myRange))  // 5
*
* */