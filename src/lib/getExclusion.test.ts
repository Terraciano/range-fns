import { getExclusion } from './getExclusion'

it('getExclusion', () => {
  expect(getExclusion([5, 10], [7, 20])).toEqual([
    [5, 7],
    [10, 20],
  ])
  expect(getExclusion([5, 10], [12, 20])).toEqual([])
  expect(getExclusion([12, 15], [13, 20])).toEqual([
    [12, 13],
    [15, 20],
  ])
})
