
export const insert = (arr: any[], index: number, ...newItems: any[]) => [
  ...arr.slice(0, index),
  ...newItems,
  ...arr.slice(index),
];