import { insert } from 'utils/insert';

const _ = insert;

describe('insert', () => {
  it('should return array with one item', () => {
    expect(_([], 0, 'a')).toEqual(['a']);
    expect(_([], 4, 'a')).toEqual(['a']);
    expect(_([], 88, 'a')).toEqual(['a']);
    expect(_([], -1, 'a')).toEqual(['a']);
    expect(_([], -15, 'a')).toEqual(['a']);
  });

  it('should return array with some items', () => {
    expect(_([], 0, 'a', 'b')).toEqual(['a', 'b']);
    expect(_([], 4, 'a', 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
    expect(_([], 88, 'a', 45, false)).toEqual(['a', 45, false]);
    expect(_([], -1, 'a', undefined, null, [1, 2, 3], 'b'))
      .toEqual(['a', undefined, null, [1, 2, 3], 'b']);
  });

  it('should return array with item in the end', () => {
    expect(_(['a'], 1, 'b')).toEqual(['a', 'b']);
    expect(_(['a'], 4, 'b')).toEqual(['a', 'b']);
    expect(_(['a'], 88, 'b')).toEqual(['a', 'b']);
  });

  it('should return array with some items in the end', () => {
    expect(_(['a'], 4, 'b', 'c', 'd')).toEqual(['a', 'b', 'c', 'd']);
    expect(_(['a'], 88, undefined, null, [1, 2, 3], 'b'))
      .toEqual(['a', undefined, null, [1, 2, 3], 'b']);
  });

  it('should return array with item in the beginning', () => {
    expect(_(['a'], 0, 'b')).toEqual(['b', 'a']);
    expect(_(['a'], -1, 'b')).toEqual(['b', 'a']);
    expect(_(['a'], -5, 'b')).toEqual(['b', 'a']);
    expect(_(['a'], -88, 'b')).toEqual(['b', 'a']);
  });

  it('should return array with some items in the beginning', () => {
    expect(_(['a'], 0, 'b', 'c', 'd')).toEqual(['b', 'c', 'd', 'a']);
    expect(_(['a'], -1, undefined, null, [1, 2, 3], 'b'))
      .toEqual([undefined, null, [1, 2, 3], 'b', 'a']);
  });

  it('should return array with item in the middle', () => {
    const mock = ['a', 'b', 'c', 'd', 'f'];
    expect(_(mock, 2, 123)).toEqual(['a', 'b', 123, 'c', 'd', 'f']);
    expect(_(mock, 4, 123)).toEqual(['a', 'b', 'c', 'd', 123, 'f']);
    expect(_(mock, 1, false)).toEqual(['a', false, 'b', 'c', 'd', 'f']);
    expect(_(mock, 3, [1, 2, 3])).toEqual(['a', 'b', 'c', [1, 2, 3], 'd', 'f']);
  });

  it('should return array with some items in the middle', () => {
    const mock = ['a', 'b', 'c', 'd', 'f'];
    expect(_(mock, 2, 12, 34, 56))
      .toEqual(['a', 'b', 12, 34, 56, 'c', 'd', 'f']);
    expect(_(mock, 4, false, undefined))
      .toEqual(['a', 'b', 'c', 'd', false, undefined, 'f']);
    expect(_(mock, 1, [11, 22, 33], { test: 'qqq' }))
      .toEqual(['a', [11, 22, 33], { test: 'qqq' }, 'b', 'c', 'd', 'f']);
  });
});

export { };