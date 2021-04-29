import type {Range} from "./types";
import {getDifference} from "./getDifference";

export const getValuesFromRange = <T extends number> (range:Range<T>)=>{
    return Array(getDifference(range)+ 1).fill(0).map((_, idx) => range.start + idx) as Array<T>
}

/*
* Returns an array containing the whole range passed to the function
*
* const myRange = createRange(5, 10);
*
* console.log(getValuesFromRange(myRange))  // [5,6,7,8,9,10]
*
*
*/
