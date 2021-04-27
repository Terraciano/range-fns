import type { Range } from './types';

export const splitRange = <T extends number>(range: Range<T>, splitAt: T): Array<Range<T>> => {
  const isBetween = range.start < splitAt && range.end > splitAt;

  return isBetween
    ? [
        {
          start: range.start,
          end: splitAt,
        },
        {
          start: splitAt,
          end: range.end,
        },
      ]
    : [range];
};
