import { FC, ReactNode, useState } from 'react';
import { generateClass } from 'utils/generateClass';
import SwitchContext from './SwitchContext';
import './index.scss';

type Props = {
  children: ReactNode;
  defaultValue: string;
  onSwitch?: (value: string, prev: string) => void;
  className?: string;
};

const Switch: FC<Props> = (props) => {
  const {
    children,
    defaultValue,
    onSwitch,
    className = '',
  } = props;
  
  const [value, setValue] = useState(defaultValue);

  const chnageValue = (newValue: string) => {
    if (onSwitch) onSwitch(newValue, value);
    setValue(newValue);
  };

  return (
    <SwitchContext.Provider value={{ value, setValue: chnageValue }}>
      <div className={generateClass('switch', className)}>
        <div className='switch__wrap'>
          {children}
        </div>
      </div>
    </SwitchContext.Provider>
  );
};

export { Switch };