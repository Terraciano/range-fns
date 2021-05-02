import { splitRangeByDuration } from './splitRangeByDuration'

it('splitRangeByDuration', () => {
  expect(splitRangeByDuration([0, 10], 5)).toEqual([
    [0, 5],
    [5, 10],
  ])
})
