import {
  getLiters,
  getRealFuelPrice,
  hasValues,
} from './index';

describe('fueldPrice', () => {
  describe('getLiters', () => {
    it('returns 16.35', () => {
      expect(getLiters(50, 3.059).toFixed(2)).toBe('16.35');
    });

    it('returns 14.14', () => {
      expect(getLiters(50, 4.489).toFixed(2)).toBe('11.14');
    });

    it('returns 27.86', () => {
      expect(getLiters(100, 3.589).toFixed(2)).toBe('27.86');
    });
  });

  describe('getRealFuelPrice', () => {
    it('returns 2.91', () => {
      expect(getRealFuelPrice(16.35, 47.5).toFixed(2)).toBe('2.91');
    });

    it('returns 3.00', () => {
      expect(getRealFuelPrice(25, 75).toFixed(2)).toBe('3.00');
    });

    it('returns 3.64', () => {
      expect(getRealFuelPrice(27.45, 100).toFixed(2)).toBe('3.64');
    });
  });

  describe('hasValues', () => {
    it('returns false', () => {
      expect(hasValues(0)).toBeFalsy()
    });

    it('returns false', () => {
      expect(hasValues(-1)).toBeFalsy()
    });

    it('returns true', () => {
      expect(hasValues(0.01)).toBeTruthy()
    });
  });
});
