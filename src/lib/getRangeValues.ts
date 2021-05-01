/**
* Returns an array containing the whole range passed to the function
*
* const myRange = createRange(5, 10);
*
* console.log(getRangeValues(myRange))  // [5,6,7,8,9,10]
*
*
*/

import type {Range} from "./types";
import {getDifference} from "./getDifference";

export const getRangeValues = <T extends number> (range:Range<T>, limit=0 as T)=>{
    return Array(limit ? limit : getDifference(range) + 1).fill(0).map((_, idx) => range[0] + idx) as Array<T>
}

