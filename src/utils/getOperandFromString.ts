import { Operand } from 'types';

export const getOperandFromString = (str: string): Operand | null => {
  if (!/[0-9]/g.test(str)) return null;

  const hasComma = /,/g.test(str);

  return {
    beforeComma: Number(str.split(',')[0]),
    hasComma,
    afterComma: hasComma ? Number(str.split(',')[1]) : 0,
  };
};