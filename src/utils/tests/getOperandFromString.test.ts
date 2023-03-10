import { Operand } from 'types';
import { getOperandFromString } from 'utils/getOperandFromString';

const gofs = getOperandFromString;
const mockOperand: Operand = {
  beforeComma: 0,
  hasComma: false,
  afterComma: 0,
};
const withComma = { ...mockOperand, hasComma: true };

describe('getOperandFromString', () => {
  it('should return null', () => {
    expect(gofs('')).toEqual(null);
    expect(gofs('ergre')).toEqual(null);
    expect(gofs('     ')).toEqual(null);
  });
  
  it('should return zero', () => {
    expect(gofs('0')).toEqual(mockOperand);
    expect(gofs('0000')).toEqual(mockOperand);
    expect(gofs('0,0')).toEqual(withComma);
    expect(gofs('0000,0')).toEqual(withComma);
    expect(gofs('0,0000')).toEqual(withComma);
    expect(gofs('0000,0000')).toEqual(withComma);
  });

  it('should return operand without comma', () => {
    expect(gofs('568')).toEqual({ ...mockOperand, beforeComma: 568 });
    expect(gofs('-245')).toEqual({ ...mockOperand, beforeComma: -245 });
    expect(gofs('89136405')).toEqual({ ...mockOperand, beforeComma: 89136405 });
    expect(gofs('-3413568')).toEqual({ ...mockOperand, beforeComma: -3413568 });
  });

  it('should return operand with comma', () => {
    expect(gofs('568,0')).toEqual({ ...withComma, beforeComma: 568 });
    expect(gofs('-245,0')).toEqual({ ...withComma, beforeComma: -245 });
    expect(gofs('89136405,0')).toEqual({ ...withComma, beforeComma: 89136405 });
    expect(gofs('-3413568,0')).toEqual({ ...withComma, beforeComma: -3413568 });

    expect(gofs('0,568')).toEqual({ ...withComma, afterComma: 568 });
    expect(gofs('-0,245'))
      .toEqual({ ...withComma, beforeComma: -0, afterComma: 245 });
    expect(gofs('0,89136405')).toEqual({ ...withComma, afterComma: 89136405 });
    expect(gofs('-0,3413568'))
      .toEqual({ ...withComma, beforeComma: -0, afterComma: 3413568 });

    expect(gofs('123,568'))
      .toEqual({ ...withComma, beforeComma: 123, afterComma: 568 });
    expect(gofs('-40,245'))
      .toEqual({ ...withComma, beforeComma: -40, afterComma: 245 });
    expect(gofs('52235452,89136405'))
      .toEqual({ ...withComma, beforeComma: 52235452, afterComma: 89136405 });
    expect(gofs('-43563,3413568'))
      .toEqual({ ...withComma, beforeComma: -43563, afterComma: 3413568 });
  });
});

export {};