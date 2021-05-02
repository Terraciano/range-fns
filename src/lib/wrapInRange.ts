import {Range} from "./types";

export const wrapInRange =<T extends number>(
  value: number,range:Range<T>,
): number => {
  return range[0] + ((value - range[0]) % (range[1] - range[0]));
};
