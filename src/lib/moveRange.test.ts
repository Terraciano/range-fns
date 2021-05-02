import { moveRange } from './moveRange'

it('moveRange', () => {
  expect(moveRange([0, 10], 5)).toEqual([5, 15])
  expect(moveRange([5, 15], 0)).toEqual([0, 10])
})
