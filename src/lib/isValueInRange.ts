/**
 * Given a value, returns a boolean if the value is in a given range
 * const myRange = createRange<number>(5,10)
 *
 * console.log(isValueInRange(3,myRange)) //False
 * console.log(isValueInRange(6,myRange)) //True
 */

import type { Range } from './types';

export const isValueInRange = <T extends number>(value: T, range: Range<T>) => {
  return value >= range[0] && value <= range[1];
};
