import { moveRange } from './moveRange';

it('moveRange', () => {
  expect(moveRange({ start: 0, end: 10 } , 5 )).toEqual({ start: 5, end: 15 });
  expect(moveRange({ start: 5, end: 15 } , 0 )).toEqual({ start: 0, end: 10 });
});
