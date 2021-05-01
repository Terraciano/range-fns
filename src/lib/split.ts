import type { Range } from './types';

export const split = <T extends number>(range: Range<T>, splitAt: T): Array<Range<T>> => {
  const isBetween = range[0] < splitAt && range[1] > splitAt;

  return isBetween
    ? [
        {
          start: range[0],
          end: splitAt,
        },
        {
          start: splitAt,
          end: range[1],
        },
      ]
    : [range];
};
