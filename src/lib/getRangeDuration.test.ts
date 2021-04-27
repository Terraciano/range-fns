import { getRangeDuration } from './getRangeDuration';

it('getRangeDuration', () => {
  expect(getRangeDuration({ start: 10, end: 0 })).toEqual(-10);
  expect(getRangeDuration({ start: 10, end: 10 })).toEqual(0);
  expect(getRangeDuration({ start: 10, end: 20 })).toEqual(10);
});
