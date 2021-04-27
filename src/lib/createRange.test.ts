import { createRange } from './createRange';

it('createRange', () => {
  expect(createRange(0, 10 )).toEqual({ start: 0, end: 10 });
});
