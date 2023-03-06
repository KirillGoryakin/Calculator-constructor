import { generateClass } from 'utils/generateClass';

describe('generateClass', () => {
  it('should return empty string', () => {
    expect(generateClass('')).toEqual('');
    expect(generateClass()).toEqual('');
    expect(generateClass('', '', '')).toEqual('');

    expect(generateClass(' ')).toEqual('');
    expect(generateClass('      ')).toEqual('');
    expect(generateClass('      ', '      ', '      ')).toEqual('');
  });

  it('should return string only with 1 class name', () => {
    expect(generateClass('someClass')).toEqual('someClass');
    expect(generateClass('someClass', '', '  ')).toEqual('someClass');
    expect(generateClass('', '  ', 'someClass')).toEqual('someClass');
    expect(generateClass('  ', '', 'someClass', ' ', '')).toEqual('someClass');
  });

  it('should return string with 2 class names', () => {
    expect(generateClass('someClass', 'another')).toEqual('someClass another');
    expect(generateClass('someClass', '', 'another'))
      .toEqual('someClass another');
    expect(generateClass('  ', 'another', '', ' ', 'someClass'))
      .toEqual('another someClass');
    expect(generateClass('  ', '', 'someClass', 'another', '  '))
      .toEqual('someClass another');
  });

  it('should return string with a few class names', () => {
    expect(generateClass('some', 'class  ', 'name')).toEqual('some class name');
    expect(generateClass('', 'an', '', ' other', ' ', '', 'class ', '', 'name'))
      .toEqual('an other class name');
    expect(generateClass('', 'a', '  b  ', 'c     ', ' ', '  d  '))
      .toEqual('a b c d');
    expect(generateClass('123  ', '  3rd ', '  some class  ', ' a14', 'rr  '))
      .toEqual('123 3rd some class a14 rr');
  });
});

export {};