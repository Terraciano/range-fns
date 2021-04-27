import { createRange } from './createRange';
import { createRangeFromDuration } from './createRangeFromDuration';
import type { Beats } from '../../core/lib/types';

it('createRangeFromDuration', () => {
  expect(createRangeFromDuration(10 )).toEqual(createRange(0 , 10 ));
});
