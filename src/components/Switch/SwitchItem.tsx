import { FC, ReactNode, useContext } from 'react';
import { generateClass } from 'utils/generateClass';
import SwitchContext from './SwitchContext';

type Props = {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
};

const SwitchItem: FC<Props> = (props) => {
  const {
    value,
    label,
    icon,
    className = '',
  } = props;
  
  const {
    value: switchValue,
    setValue: setSwitchValue,
  } = useContext(SwitchContext);

  const isCurrent = switchValue === value;

  const activeClass = isCurrent ? ' switch__item_active' : '';
  const handleClick = () => !isCurrent && setSwitchValue(value);
  
  return (
    <button
      className={generateClass('switch__item', className, activeClass)}
      onClick={handleClick}
    >
      {icon && <div className='switch__icon-wrap'>{icon}</div>}
      <span className='switch__item-text'>{label}</span>
    </button>
  );
};

export { SwitchItem };