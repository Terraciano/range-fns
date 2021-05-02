import {subtractFromRange} from "./subtractFromRange";
import {Range} from "./types";

it('subtractFromRange', () => {
    expect(subtractFromRange<number,Range<number>>([5,10],3)).toEqual([2,7]);
});
