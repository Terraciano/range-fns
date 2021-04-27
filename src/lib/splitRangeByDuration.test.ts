import { splitRangeByDuration } from './splitRangeByDuration';

it('splitRangeByDuration', () => {
  expect(splitRangeByDuration({ start: 0, end: 10 } , 5 )).toEqual([
    { start: 0, end: 5 },
    { start: 5, end: 10 },
  ]);
});
