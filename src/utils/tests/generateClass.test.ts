import { generateClass } from 'utils/generateClass';

const _ = generateClass;

describe('generateClass', () => {
  it('should return empty string', () => {
    expect(_('')).toEqual('');
    expect(_()).toEqual('');
    expect(_('', '', '')).toEqual('');

    expect(_(' ')).toEqual('');
    expect(_('      ')).toEqual('');
    expect(_('      ', '      ', '      ')).toEqual('');
  });

  it('should return string only with 1 class name', () => {
    expect(_('someClass')).toEqual('someClass');
    expect(_('someClass', '', '  ')).toEqual('someClass');
    expect(_('', '  ', 'someClass')).toEqual('someClass');
    expect(_('  ', '', 'someClass', ' ', '')).toEqual('someClass');
  });

  it('should return string with 2 class names', () => {
    expect(_('someClass', 'another')).toEqual('someClass another');
    expect(_(' some   Class ', '', '  ')).toEqual('some Class');
    expect(_('someClass', '', 'another')).toEqual('someClass another');
    expect(_('  ', 'another', '', ' ', 'someClass'))
      .toEqual('another someClass');
    expect(_('  ', '', 'someClass', 'another', '  '))
      .toEqual('someClass another');
  });

  it('should return string with a few class names', () => {
    expect(_('some', 'class  ', 'name')).toEqual('some class name');
    expect(_('  ', '', '  some    Class     ', 'another', '  '))
      .toEqual('some Class another');
    expect(_('', '  ', '  so  meClas  s  ')).toEqual('so meClas s');
    expect(_('  so  me  ', 'cla      ss  ', 'na  me'))
      .toEqual('so me cla ss na me');
    expect(_('', 'an', '', ' other', ' ', '', 'class ', '', 'name'))
      .toEqual('an other class name');
    expect(_('', 'a', '  b  ', 'c     ', ' ', '  d  '))
      .toEqual('a b c d');
    expect(_('123  ', '  3rd ', '  some class  ', ' a14', 'rr  '))
      .toEqual('123 3rd some class a14 rr');
  });
});

export {};