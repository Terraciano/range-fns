import { createRange } from './createRange';
import { createRangeFromDuration } from './createRangeFromDuration';

it('createRangeFromDuration', () => {
  expect(createRangeFromDuration(10 )).toEqual(createRange(0 , 10));
});
