import { expect } from 'chai';
import { calculateValidationNumber } from './coding-challenge-4';

describe('Coding Challenge #4', () => {

  describe('calculateValidationNumber(input)', () => {
    it('should return 6 when input is 444444', () => {
      expect(calculateValidationNumber(444444)).to.equal(6);
    });

    it('should return 1 when input is 1234', () => {
      expect(calculateValidationNumber(1234)).to.equal(1);
    });

    it('should return 5 when input is 23478998', () => {
      expect(calculateValidationNumber(23478998)).to.equal(5);
    });

    it('should return 1 when input is 1', () => {
      expect(calculateValidationNumber(1)).to.equal(1);
    });

    it('should return 0 when input is 0', () => {
      expect(calculateValidationNumber(0)).to.equal(0);
    });

    it('should throw an error when input is "1"', () => {
      expect(() => calculateValidationNumber('1')).to.throw('Input is not an Integer');
    });

    it('should throw an error when input is empty', () => {
      expect(() => calculateValidationNumber()).to.throw('Input is not an Integer');
    });
  });
});