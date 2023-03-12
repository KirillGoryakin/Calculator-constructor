import { Operand } from 'types';
import { getOperandFromString } from 'utils/getOperandFromString';

const _ = getOperandFromString;
const mockOperand: Operand = {
  beforeComma: 0,
  hasComma: false,
  afterComma: 0,
};
const withComma = { ...mockOperand, hasComma: true };

describe('getOperandFromString', () => {
  it('should return null', () => {
    expect(_('')).toEqual(null);
    expect(_('ergre')).toEqual(null);
    expect(_('     ')).toEqual(null);
  });
  
  it('should return zero', () => {
    expect(_('0')).toEqual(mockOperand);
    expect(_('0000')).toEqual(mockOperand);
    expect(_('0,0')).toEqual(withComma);
    expect(_('0000,0')).toEqual(withComma);
    expect(_('0,0000')).toEqual(withComma);
    expect(_('0000,0000')).toEqual(withComma);
  });

  it('should return operand without comma', () => {
    expect(_('568')).toEqual({ ...mockOperand, beforeComma: 568 });
    expect(_('-245')).toEqual({ ...mockOperand, beforeComma: -245 });
    expect(_('89136405')).toEqual({ ...mockOperand, beforeComma: 89136405 });
    expect(_('-3413568')).toEqual({ ...mockOperand, beforeComma: -3413568 });
  });

  it('should return operand with comma', () => {
    expect(_('568,0')).toEqual({ ...withComma, beforeComma: 568 });
    expect(_('-245,0')).toEqual({ ...withComma, beforeComma: -245 });
    expect(_('89136405,0')).toEqual({ ...withComma, beforeComma: 89136405 });
    expect(_('-3413568,0')).toEqual({ ...withComma, beforeComma: -3413568 });

    expect(_('0,568')).toEqual({ ...withComma, afterComma: 568 });
    expect(_('-0,245'))
      .toEqual({ ...withComma, beforeComma: -0, afterComma: 245 });
    expect(_('0,89136405')).toEqual({ ...withComma, afterComma: 89136405 });
    expect(_('-0,3413568'))
      .toEqual({ ...withComma, beforeComma: -0, afterComma: 3413568 });

    expect(_('123,568'))
      .toEqual({ ...withComma, beforeComma: 123, afterComma: 568 });
    expect(_('-40,245'))
      .toEqual({ ...withComma, beforeComma: -40, afterComma: 245 });
    expect(_('52235452,89136405'))
      .toEqual({ ...withComma, beforeComma: 52235452, afterComma: 89136405 });
    expect(_('-43563,3413568'))
      .toEqual({ ...withComma, beforeComma: -43563, afterComma: 3413568 });
  });
});

export {};