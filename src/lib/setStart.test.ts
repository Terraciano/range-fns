import { setStart } from './setStart';

it('setStart', () => {
  expect(setStart({ start: 0, end: 10 } , 10 )).toEqual({
    start: 10,
    end: 10,
  });

  // doesn't let end be less than start
  // and preserves excess properties
  expect(setStart({ start: 0 , end: 10 , extraProp: true }, 20 )).toEqual({
    start: 20,
    end: 20,
    extraProp: true,
  });
});
