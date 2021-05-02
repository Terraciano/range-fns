import { addToRange } from './addToRange';

it('addToRange', () => {
  expect(addToRange([0,10], 5 )).toEqual([5,15]);
});
