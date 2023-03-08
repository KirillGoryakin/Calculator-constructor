import { FC } from 'react';
import './Display.scss';

type Props = {
  value: string;
};

const Display: FC<Props> = ({ value }) => {
  return (
    <div className='display'>
      <div className='display__text'>
        {value}
      </div>
    </div>
  );
};

export { Display };