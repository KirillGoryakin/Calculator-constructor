import { FC } from 'react';
import { Button } from 'components/Button';
import './Operators.scss';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, operator: string) => void;
};

const Operators: FC<Props> = ({ onClick }) => {
  return (
    <div className='operators'>
      <Button onClick={e => onClick && onClick(e, '/')}>/</Button>
      <Button onClick={e => onClick && onClick(e, 'x')}>x</Button>
      <Button onClick={e => onClick && onClick(e, '-')}>-</Button>
      <Button onClick={e => onClick && onClick(e, '+')}>+</Button>
    </div>
  );
};

export { Operators };