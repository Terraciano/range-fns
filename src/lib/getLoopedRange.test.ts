import { getLoopedRange } from './getLoopedRange'

it('getLoopedRange', () => {
  // doesn't modify start, only duration
  expect(getLoopedRange([10, 20], 1)).toEqual([10, 30])

  // loop of 1 means it will be 2x
  expect(getLoopedRange([0, 10], 1)).toEqual([0, 20])

  // doesn't do anything if it doesn't have a duration
  expect(getLoopedRange([10, 10], 1)).toEqual([10, 10])
})
