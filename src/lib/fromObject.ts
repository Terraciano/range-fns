import {Range,RangeObject} from "./types";

export const fromObject = <T extends number>(range:RangeObject<T>) =>{
    return [range.start,range.end] as Range<T>
}