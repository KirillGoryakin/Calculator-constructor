import { FC } from 'react';
import { Part } from 'types';
import { generateClass } from 'utils/generateClass';
import './Parts.scss';

type Props = {
  parts: Part[];
  partNodes: React.ReactNode[];
  onDrag?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
};

const Parts: FC<Props> = (props) => {
  const {
    parts,
    partNodes,
    onDrag,
    onDragStart,
    onDragEnd,
  } = props;
  
  return (
    <div className='parts'>
      <div className='parts__wrap'>
        {parts.map(part => (
          <div
            key={part.id}
            className={generateClass(
              'parts__part',
              part.disabled ? 'parts__part_disabled' : ''
            )}
            draggable={!part.disabled}
            onDrag={e => onDrag && onDrag(e, part)}
            onDragStart={e => onDragStart && onDragStart(e, part)}
            onDragEnd={e => onDragEnd && onDragEnd(e, part)}
          >
            {partNodes[part.id]}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Parts };