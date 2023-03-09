
export type Mode = 'runtime' | 'constructor';

export interface Part {
  id: number;
  disabled: boolean;
  insert?: 'before' | 'after' | null;
}

export type Operator = '/' | 'x' | '-' | '+';
export type Operand = {
  beforeComma: number;
  hasComma: boolean;
  afterComma: number;
};