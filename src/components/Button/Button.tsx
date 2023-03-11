import './Button.scss';
import { FC } from 'react';
import { generateClass } from 'utils/generateClass';

type Props = {
  children: string;
  size?: 'md' | 'lg';
  variant?: 'outline' | 'filled';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = (props) => {
  const {
    children,
    size = 'md',
    variant = 'outline',
    className = '',
    onClick,
  } = props;
  
  return (
    <button
      className={generateClass(
        'button',
        `button_size_${size}`,
        `button_variant_${variant}`,
        className,
        )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };