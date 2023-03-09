import { ReactComponent as ImgIcon } from 'assets/icons/add_image.svg';
import { FC, useState } from 'react';
import { Mode, Part } from 'types';
import { generateClass } from 'utils/generateClass';
import './AssemblyZone.scss';

type Props = {
  parts: Part[];
  partNodes: React.ReactNode[];
  mode: Mode,
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
    partNodes,
    mode,
    onPartDragStart,
    onPartDragOver,
    onPartDragLeave,
    onZoneDrop,
    onDoubleClick,
    onPartDrop,
  } = props;
  
  const isConstructor = mode === 'constructor';

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
      className={`assembly-zone assembly-zone_mode_${mode}`}
      onDrop={e => isConstructor && handleZoneDrop(e)}
      onDragOver={e => isConstructor && handleDragOver(e)}
      onDragLeave={e => isConstructor && handleDragLeave(e)}
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
              draggable={isConstructor}
              onDragStart={e => 
                isConstructor && onPartDragStart
                && onPartDragStart(e, part)
              }
              onDragOver={e => 
                isConstructor && onPartDragOver
                && onPartDragOver(e, part)
              }
              onDragLeave={e => 
                isConstructor && onPartDragLeave &&
                onPartDragLeave(e, part)
              }
              onDoubleClick={e => 
                isConstructor && onDoubleClick &&
                onDoubleClick(e, part)
              }
              onDrop={e => isConstructor && handlePartDrop(e, part)}
            >
              <div className='
                assembly-zone__part-divider
                assembly-zone__part-divider_before'
              />
              {partNodes[part.id]}
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