import { split } from './split';

it('split', () => {
  expect(split([10,20] , 15 )).toEqual([
    [10,15],
    [15,20],
  ]);
});
