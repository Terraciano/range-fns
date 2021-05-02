import { getItemsInRange } from './getItemsInRange'

it('getItemsInRange', () => {
  expect(
    getItemsInRange<number, [number, number]>(
      [5, 10],
      [
        [1, 3],
        [5, 8],
        [7, 9],
      ]
    )
  ).toEqual([
    [5, 8],
    [7, 9],
  ])
})
