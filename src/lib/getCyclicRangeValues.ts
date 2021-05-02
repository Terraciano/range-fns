import { Range } from './types'
import { getRangeValues } from './getRangeValues'

export const getCyclicRangeValues = <T extends number>(length: number, range: Range<T>) => {
  return Array(length)
    .fill(getRangeValues(range))
    .flatMap((item) => item)
    .slice(0, length) as Array<T>
}
