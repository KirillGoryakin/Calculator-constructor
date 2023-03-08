import { insert } from 'utils/insert';

describe('insert', () => {
  it('should return array with one item', () => {
    expect(insert([], 0, 'a')).toEqual(['a']);
    expect(insert([], 4, 'a')).toEqual(['a']);
    expect(insert([], 88, 'a')).toEqual(['a']);
    expect(insert([], -1, 'a')).toEqual(['a']);
    expect(insert([], -15, 'a')).toEqual(['a']);
  });

  it('should return array with some items', () => {
    expect(insert([], 0, 'a', 'b')).toEqual(['a', 'b']);
    expect(insert([], 4, 'a', 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
    expect(insert([], 88, 'a', 45, false)).toEqual(['a', 45, false]);
    expect(insert([], -1, 'a', undefined, null, [1, 2, 3], 'b'))
      .toEqual(['a', undefined, null, [1, 2, 3], 'b']);
  });

  it('should return array with item in the end', () => {
    expect(insert(['a'], 1, 'b')).toEqual(['a', 'b']);
    expect(insert(['a'], 4, 'b')).toEqual(['a', 'b']);
    expect(insert(['a'], 88, 'b')).toEqual(['a', 'b']);
  });

  it('should return array with some items in the end', () => {
    expect(insert(['a'], 4, 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
    expect(insert(['a'], 88, undefined, null, [1, 2, 3], 'b'))
      .toEqual(['a', undefined, null, [1, 2, 3], 'b']);
  });

  it('should return array with item in the beginning', () => {
    expect(insert(['a'], 0, 'b')).toEqual(['b', 'a']);
    expect(insert(['a'], -1, 'b')).toEqual(['b', 'a']);
    expect(insert(['a'], -5, 'b')).toEqual(['b', 'a']);
    expect(insert(['a'], -88, 'b')).toEqual(['b', 'a']);
  });

  it('should return array with some items in the beginning', () => {
    expect(insert(['a'], 0, 'b', 'c', 'd')).toEqual(['b', 'c', 'd', 'a']);
    expect(insert(['a'], -1, undefined, null, [1, 2, 3], 'b'))
      .toEqual([undefined, null, [1, 2, 3], 'b', 'a']);
  });

  it('should return array with item in the middle', () => {
    const mock = ['a', 'b', 'c', 'd', 'f'];
    expect(insert(mock, 2, 123)).toEqual(['a', 'b', 123, 'c', 'd', 'f']);
    expect(insert(mock, 4, 123)).toEqual(['a', 'b', 'c', 'd', 123, 'f']);
    expect(insert(mock, 1, false)).toEqual(['a', false, 'b', 'c', 'd', 'f']);
    expect(insert(mock, 3, [1, 2, 3]))
      .toEqual(['a', 'b', 'c', [1, 2, 3], 'd', 'f']);
  });

  it('should return array with some items in the middle', () => {
    const mock = ['a', 'b', 'c', 'd', 'f'];
    expect(insert(mock, 2, 12, 34, 56))
      .toEqual(['a', 'b', 12, 34, 56, 'c', 'd', 'f']);
    expect(insert(mock, 4, false, undefined))
      .toEqual(['a', 'b', 'c', 'd', false, undefined, 'f']);
    expect(insert(mock, 1, [11, 22, 33], { test: 'qqq' }))
      .toEqual(['a', [11, 22, 33], { test: 'qqq' }, 'b', 'c', 'd', 'f']);
  });
});

export { };