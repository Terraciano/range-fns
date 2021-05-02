import {Range,RangeObject} from "./types";

export const toObject =<T extends number> (range:Range<T>) =>{
    return {start:range[0],end:range[1]} as RangeObject<T>
}