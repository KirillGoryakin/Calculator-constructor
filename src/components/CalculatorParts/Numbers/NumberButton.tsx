import { FC } from 'react';
import { Button } from 'components/Button';
import { generateClass } from 'utils/generateClass';

type Props = {
  n: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, n: number) => void;
};

const NumberButton: FC<Props> = ({ n, onClick }) => {
  return (
    <Button
      onClick={e => onClick && onClick(e, n)}
      className={generateClass('numbers__button', `numbers__button_${n}`)}
    >
      {n+''}
    </Button>
  );
};

export { NumberButton };