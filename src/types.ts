
export type Mode = 'runtime' | 'constructor';

export interface Part {
  id: number;
  node: React.ReactNode;
  disabled: boolean;
  insert?: 'before' | 'after' | null;
}