import { createRange } from './createRange';
import type { Beats } from '../../core/lib/types';

it('createRange', () => {
  expect(createRange(0 as Beats, 10 as Beats)).toEqual({ start: 0, end: 10 });
});
