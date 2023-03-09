import { FC } from 'react';
import { generateClass } from 'utils/generateClass';
import './Display.scss';

type Props = {
  value?: string;
};

const Display: FC<Props> = ({ value }) => {
  const size = value && value.length > 8 ? 'sm' : 'xl';
  
  return (
    <div className='display'>
      <div className={generateClass(
        'display__text',
        `display__text_size_${size}`,
      )}>
        {value}
      </div>
    </div>
  );
};

export { Display };