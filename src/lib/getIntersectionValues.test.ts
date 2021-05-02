import { getIntersectionValues } from './getIntersectionValues'

it('getIntersectionValues', () => {
  expect(getIntersectionValues([5, 10], [7, 12])).toEqual([7, 8, 9, 10])
})
