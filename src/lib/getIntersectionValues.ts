/**
* Returns an array containing the intersection of two ranges
*
* const firstRange = createRange(5, 10);
* const secondRange = createRange(7, 12);
*
* console.log(getIntersectionValues(firstRange,secondRange))  // [7,8,9,10]
*
*
*/

import type {Range} from './types'
import {getRangeValues} from "./getRangeValues";

export const getIntersectionValues = <T extends number>(rangeA:Range<T>,rangeB:Range<T>) =>{
    return getRangeValues(rangeA).filter(element => getRangeValues(rangeB).indexOf(element) !== -1)
}


