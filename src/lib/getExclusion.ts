import { Range } from './types'
import { hasIntersection } from './hasIntersection'
import { createRange } from './createRange'

export const getExclusion = <T extends number>(rangeA: Range<T>, rangeB: Range<T>) => {
  if (!hasIntersection(rangeA, rangeB)) return []
  return [createRange(rangeA[0], rangeB[0]), createRange(rangeA[1], rangeB[1])]
}
