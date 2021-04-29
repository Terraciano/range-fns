import type {Range} from './types'
import {getValuesFromRange} from "./getValuesFromRange";

export const getIntersection = <T extends number>(rangeA:Range<T>,rangeB:Range<T>) =>{
    return getValuesFromRange(rangeA).filter(element => getValuesFromRange(rangeB).indexOf(element) !== -1)
}

/*
* Returns an array containing the intersection of two ranges
*
* const firstRange = createRange(5, 10);
* const secondRange = createRange(7, 12);
*
* console.log(getIntersection(firstRange,secondRange))  // [7,8,9,10]
*
*
*/
