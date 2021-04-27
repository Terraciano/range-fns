import { getDifference } from './getDifference';

it('getRangeDuration', () => {
  expect(getDifference({ start: 10, end: 0 })).toEqual(-10);
  expect(getDifference({ start: 10, end: 10 })).toEqual(0);
  expect(getDifference({ start: 10, end: 20 })).toEqual(10);
});
