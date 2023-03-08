import { ReactNode, FC, Children } from 'react';
import './Parts.scss';

type Props = {
  parts: ReactNode[];
  onDrag?: (e: React.DragEvent<HTMLDivElement>, part: ReactNode) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, part: ReactNode) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>, part: ReactNode) => void;
};

const Parts: FC<Props> = (props) => {
  const {
    parts,
    onDrag,
    onDragStart,
    onDragEnd,
  } = props;
  
  return (
    <div className='parts'>
      <div className='parts__wrap'>
        {Children.map(parts, part => (
          <div
            className='parts__part'
            draggable
            onDrag={e => onDrag && onDrag(e, part)}
            onDragStart={e => onDragStart && onDragStart(e, part)}
            onDragEnd={e => onDragEnd && onDragEnd(e, part)}
          >
            {part}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Parts };