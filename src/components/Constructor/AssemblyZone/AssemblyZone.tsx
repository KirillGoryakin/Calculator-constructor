import { ReactComponent as ImgIcon } from 'assets/icons/add_image.svg';
import { FC, useState } from 'react';
import { Part } from 'types';
import { generateClass } from 'utils/generateClass';
import './AssemblyZone.scss';

type Props = {
  parts: Part[];
  onPartDragStart?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onPartDragOver?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onPartDragLeave?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onZoneDrop?: React.DragEventHandler<HTMLDivElement>;
  onPartDrop?: (e: React.DragEvent<HTMLDivElement>, part: Part) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement>, part: Part) => void;
};

const AssemblyZone: FC<Props> = (props) => {
  const {
    parts,
    onPartDragStart,
    onPartDragOver,
    onPartDragLeave,
    onZoneDrop,
    onDoubleClick,
    onPartDrop,
  } = props;

  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleZoneDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (onZoneDrop) onZoneDrop(e);
  };

  const handlePartDrop = (e: React.DragEvent<HTMLDivElement>, part: Part) => {
    e.preventDefault();
    e.stopPropagation();
    if (onPartDrop) onPartDrop(e, part);
  };

  return (
    <div
      className='assembly-zone'
      onDrop={handleZoneDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {parts.length === 0 ? (
        <div 
          className={generateClass(
            'assembly-zone__inner',
            'assembly-zone__inner_empty',
            dragOver ? 'assembly-zone__inner_drag_over' : ''
          )}
        >
          <ImgIcon className='assembly-zone__icon' />
          <div className='assembly-zone__text_big'>
            Перетащите сюда
          </div>
          <div className='assembly-zone__text'>
            любой элемент из левой панели
          </div>
        </div>
      ) : (
        <div className='assembly-zone__inner'>
          {parts.map(part => (
            <div
              key={part.id}
              className={generateClass(
                'assembly-zone__part',
                part.insert ? `assembly-zone__part_insert_${part.insert}` : '',
              )}
              draggable
              onDragStart={e => onPartDragStart && onPartDragStart(e, part)}
              onDragOver={e => onPartDragOver && onPartDragOver(e, part)}
              onDragLeave={e => onPartDragLeave && onPartDragLeave(e, part)}
              onDoubleClick={e => onDoubleClick && onDoubleClick(e, part)}
              onDrop={e => handlePartDrop(e, part)}
            >
              <div className='
                assembly-zone__part-divider
                assembly-zone__part-divider_before'
              />
              {part.node}
              <div className='
                assembly-zone__part-divider
                assembly-zone__part-divider_after'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { AssemblyZone };