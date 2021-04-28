import { intersection } from './intersection';

it('intersection', () => {
  expect(intersection({ start: 0, end: 10 } , { start: 5, end: 15 } )).toBe(
    true,
  );

  expect(intersection({ start: 0, end: 10 } , { start: 10, end: 15 } )).toBe(
    false,
  );

  expect(intersection({ start: 0, end: 10 } , { start: 20, end: 30 } )).toBe(
    false,
  );
});
