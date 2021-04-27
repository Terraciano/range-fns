import { isInRange } from './isInRange';

it('isInRange', () => {
  expect(isInRange({ start: 0, end: 10 } , { start: 5, end: 15 } )).toBe(
    true,
  );

  expect(isInRange({ start: 0, end: 10 } , { start: 10, end: 15 } )).toBe(
    false,
  );

  expect(isInRange({ start: 0, end: 10 } , { start: 20, end: 30 } )).toBe(
    false,
  );
});
