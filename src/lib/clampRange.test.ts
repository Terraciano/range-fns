import { clampRange } from './clampRange';

it('clampRange', () => {
  expect(
    clampRange({ start: 5, end: 25 }, { start: 10, end: 20 }),
  ).toEqual({ start: 10, end: 20 });

  // returns null if new duration is <= 0
  expect(
    clampRange({ start: 5, end: 25 }, { start: 50, end: 100 } ),
  ).toEqual(null);
});
