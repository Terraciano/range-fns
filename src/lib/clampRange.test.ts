import { clampRange } from './clampRange';

it('clampRange', () => {
  expect(
    clampRange([5,25], [10,20]),
  ).toEqual([10,20]);

  // returns null if new duration is <= 0
  expect(
    clampRange([5,25], [50,100] ),
  ).toEqual(null);
});
