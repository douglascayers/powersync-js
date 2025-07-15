import { describe, expect, it } from 'vitest';
import { sleep } from '../../src/utils/async';

describe('async', () => {
  describe('sleep', () => {
    it('should sleep for the given number of milliseconds', async () => {
      const start = Date.now();
      await sleep(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });
});
