import { isInRange } from './isInRange';
import type { Range } from './types';

// TODO: Not sure about this one
export const getItemsInRange = <P extends number, T extends Range<P>>(
  range: Range<P>,
  items: Array<T>,
) => {
  return items.filter((item) => {
    return isInRange(item, range);
  });
};
