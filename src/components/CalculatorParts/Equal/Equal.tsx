import { Button } from 'components/Button';
import { FC } from 'react';
import './Equal.scss';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Equal: FC<Props> = ({ onClick }) => {
  return (
    <Button
      className='equal_button'
      onClick={onClick}
      size='lg'
      variant='filled'
    >
      =
    </Button>
  );
};

export { Equal };