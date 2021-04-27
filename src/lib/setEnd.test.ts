import { setEnd } from './setEnd';

it('setEnd', () => {
  expect(setEnd({start: 0, end: 10}, 20 )).toEqual({
    start: 0,
    end: 20,
  });

  // doesn't let start be greater than end
  // and preserves excess properties
  expect(setEnd({ start: 10 , end: 20 , extraProp: true }, 0 )).toEqual({
    start: 0,
    end: 0,
    extraProp: true,
  });
});
