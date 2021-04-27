import { addToRange } from './addToRange';

it('addToRange', () => {
  expect(addToRange({ start: 0, end: 10 }, 5 )).toEqual({
    start: 5,
    end: 15,
  });
});
