import { describe, expect, it } from 'vitest';
import { toIsoDate } from '../date';

describe('toIsoDate', () => {
  it('returns YYYY-MM-DD', () => {
    expect(toIsoDate('2026-03-30T10:00:00.000Z')).toBe('2026-03-30');
  });
});
