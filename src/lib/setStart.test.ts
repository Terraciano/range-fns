import { setStart } from './setStart'

it('setStart', () => {
  expect(setStart([0, 10], 10)).toEqual([10, 10])

  // doesn't let end be less than start
  // and preserves excess properties
  expect(setStart([0, 10], 20)).toEqual([20, 20])
})
