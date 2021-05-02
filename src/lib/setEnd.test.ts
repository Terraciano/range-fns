import { setEnd } from './setEnd'

it('setEnd', () => {
  expect(setEnd([0, 10], 20)).toEqual([0, 20])

  // doesn't let start be greater than end
  expect(setEnd([10, 20], 0)).toEqual([0, 0])
})
