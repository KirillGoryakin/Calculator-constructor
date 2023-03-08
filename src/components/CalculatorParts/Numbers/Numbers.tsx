import { FC } from 'react';
import { Button } from 'components/Button';
import './Numbers.scss';
import { NumberButton } from './NumberButton';
import { generateClass } from 'utils/generateClass';

type Props = {
  onNumberClick?: (e: React.MouseEvent<HTMLButtonElement>, n: number) => void;
  onCommaClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Numbers: FC<Props> = ({ onNumberClick, onCommaClick }) => {
  return (
    <div className='numbers'>
      <NumberButton onClick={onNumberClick} n={7} />
      <NumberButton onClick={onNumberClick} n={8} />
      <NumberButton onClick={onNumberClick} n={9} />

      <NumberButton onClick={onNumberClick} n={4} />
      <NumberButton onClick={onNumberClick} n={5} />
      <NumberButton onClick={onNumberClick} n={6} />

      <NumberButton onClick={onNumberClick} n={1} />
      <NumberButton onClick={onNumberClick} n={2} />
      <NumberButton onClick={onNumberClick} n={3} />

      <NumberButton onClick={onNumberClick} n={0} />
      <Button
        onClick={onCommaClick} 
        className={generateClass('numbers__button', 'numbers__button_comma')}
      >,</Button>
    </div>
  );
};

export { Numbers };