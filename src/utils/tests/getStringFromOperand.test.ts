import { Operand } from 'types';
import { getStringFromOperand } from 'utils/getStringFromOperand';

const _ = getStringFromOperand;
const operand: Operand = {
  beforeComma: 0,
  hasComma: false,
  afterComma: 0,
};

describe('getStringFromOperand', () => {
  it('should return string with integer', () => {
    expect(_(operand)).toEqual('0');
    expect(_({ ...operand, beforeComma: 123})).toEqual('123');
    expect(_({ ...operand, beforeComma: 8887466474 })).toEqual('8887466474');
  });

  it('should return string with float', () => {
    const opearndWithComma = { ...operand, hasComma: true };
    expect(_({ ...opearndWithComma, beforeComma: 123 })).toEqual('123,0');
    expect(_({ ...opearndWithComma, beforeComma: 888746647 }))
      .toEqual('888746647,0');
    expect(_({ ...opearndWithComma, beforeComma: 123, afterComma: 333 }))
      .toEqual('123,333');
    expect(_({
      ...opearndWithComma,
      beforeComma: 888746647,
      afterComma: 968578,
    })).toEqual('888746647,968578');
  });
});

export {};