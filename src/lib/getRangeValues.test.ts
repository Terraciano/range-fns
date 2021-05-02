import {getRangeValues} from "./getRangeValues";

it('getRangeValues', () => {
    expect(getRangeValues([5,10])).toEqual([5,6,7,8,9,10]); //Limit is 0 by default so returns every value
    expect(getRangeValues([5,10],3)).toEqual([5,6,7]);
});
