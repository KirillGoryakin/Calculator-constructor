import { Operand } from 'types';
import { getStringFromOperand } from 'utils/getStringFromOperand';

const gsfo = getStringFromOperand;
const operand: Operand = {
  beforeComma: 0,
  hasComma: false,
  afterComma: 0,
};

describe('getStringFromOperand', () => {
  it('should return string with integer', () => {
    expect(gsfo(operand)).toEqual('0');
    expect(gsfo({ ...operand, beforeComma: 123})).toEqual('123');
    expect(gsfo({ ...operand, beforeComma: 8887466474 })).toEqual('8887466474');
  });

  it('should return string with float', () => {
    const opearndWithComma = { ...operand, hasComma: true };
    expect(gsfo({ ...opearndWithComma, beforeComma: 123 })).toEqual('123,0');
    expect(gsfo({ ...opearndWithComma, beforeComma: 888746647 }))
      .toEqual('888746647,0');
    expect(gsfo({ ...opearndWithComma, beforeComma: 123, afterComma: 333 }))
      .toEqual('123,333');
    expect(gsfo({
      ...opearndWithComma,
      beforeComma: 888746647,
      afterComma: 968578,
    })).toEqual('888746647,968578');
  });
});

export {};