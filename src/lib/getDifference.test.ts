import { getDifference } from './getDifference'

it('getDifference', () => {
  expect(getDifference([10, 0])).toEqual(-10)
  expect(getDifference([10, 10])).toEqual(0)
  expect(getDifference([10, 20])).toEqual(10)
})
