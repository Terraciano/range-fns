import {isValueInRange} from "./isValueInRange";

it('isValueInRange', () => {
    expect(isValueInRange(3,[5,10])).toEqual(false);
    expect(isValueInRange(6,[5,10])).toEqual(true)
});
