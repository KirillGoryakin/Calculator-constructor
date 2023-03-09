import { Operand } from 'types';

export const getStringFromOperand = (o: Operand): string =>
  `${o.beforeComma}${o.hasComma ? ',' + o.afterComma : ''}`;