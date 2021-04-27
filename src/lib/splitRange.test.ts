import { split } from './split';

it('splitRange', () => {
  expect(split({ start: 10, end: 20 } , 15 )).toEqual([
    { start: 10, end: 15 },
    { start: 15, end: 20 },
  ]);
});
