import {fromObject} from "./fromObject";

it('fromObject', () => {
    expect(fromObject({start:5,end:10})).toEqual([5,10]);
});
