import { getCyclicRangeValues } from './getCyclicRangeValues'
import { createRange } from './createRange'

it('createRangeFromDuration', () => {
  expect(getCyclicRangeValues(6, createRange(2, 4))).toEqual([2, 3, 4, 2, 3, 4])
})
