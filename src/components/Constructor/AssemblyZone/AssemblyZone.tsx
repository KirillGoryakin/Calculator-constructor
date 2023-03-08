import { ReactComponent as ImgIcon } from 'assets/icons/add_image.svg';
import { ReactNode, FC, useState } from 'react';
import { Part } from 'types';
import { generateClass } from 'utils/generateClass';
import './AssemblyZone.scss';

type Props = {
  parts: Part[];
  onDrop?: React.DragEventHandler<HTMLDivElement>;
};

const AssemblyZone: FC<Props> = ({ parts, onDrop }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (onDrop) onDrop(e);
  };

  return (
    <div
      className='assembly-zone'
      onDrop={handleDrop}
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
              className='assembly-zone__part'
            >
              {part.node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { AssemblyZone };