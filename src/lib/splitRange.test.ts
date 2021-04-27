import { splitRange } from './splitRange';

it('splitRange', () => {
  expect(splitRange({ start: 10, end: 20 } , 15 )).toEqual([
    { start: 10, end: 15 },
    { start: 15, end: 20 },
  ]);
});
