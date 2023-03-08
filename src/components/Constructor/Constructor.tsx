import './Constructor.scss';
import { ReactNode, FC, useState } from 'react';
import { AssemblyZone } from './AssemblyZone';
import { Parts } from './Parts';
import { generateClass } from 'utils/generateClass';
import { Mode, Part } from 'types';
import { insert } from 'utils/insert';

const getInsertPosition = (e: React.DragEvent<HTMLDivElement>) => {
  const { height, top } =
    (e.currentTarget as Element).getBoundingClientRect();
  const y = e.clientY;
  return y - top - height / 2 < 0 ? 'before' : 'after';
};

type Props = {
  children: ReactNode[];
  mode: Mode;
  className?: string;
};

const Constructor: FC<Props> = (props) => {
  const {
    children,
    mode,
    className = '',
  } = props;

  const [parts, setParts] = useState<Part[]>(children.map((node, i) => ({
    id: i,
    node,
    disabled: false,
  })));
  const [addedParts, setAddedParts] = useState<Part[]>([]);
  const [holding, setHolding] = useState<Part | null>(null);

  const handleZoneDrop = () => {
    if (!holding || addedParts.find(p => p.id === holding.id))
      return setHolding(null);

    setAddedParts(prev => [ ...prev, holding ]);

    setParts(parts.map(p => {
      if (p.id === holding.id)
        return { ...p, disabled: true };
      return p;
    }));
  };

  const handlePartDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    part: Part
  ) => {
    if (!holding) return;

    const insertPos = getInsertPosition(e);

    setAddedParts(addedParts.map(p => {
      if (p.id === part.id)
        return { ...p, insert: insertPos };
      return p;
    }));
  };

  const handlePartDragLeave = (
    e: React.DragEvent<HTMLDivElement>,
    part: Part
  ) => {
    if (e.target === e.currentTarget) {
      setAddedParts(addedParts.map(p => {
        if (p.id === part.id)
          return { ...p, insert: null };
        return p;
      }));
    }
  };

  const handlePartDrop = (e: React.DragEvent<HTMLDivElement>, part: Part) => {
    if (!holding) return;

    const insertPos = getInsertPosition(e);
    const targetIndex = addedParts.findIndex(p => p.id === part.id);
    const holdIndex = addedParts.findIndex(p => p.id === holding.id);

    const getInsertIndex = () => {
      if (targetIndex === holdIndex) return holdIndex;

      if (insertPos === 'before') {
        if (targetIndex > holdIndex)
          return targetIndex - 1;
        return targetIndex;
      } else {
        if (targetIndex < holdIndex)
          return targetIndex + 1;
        return targetIndex;
      }
    };

    setAddedParts(
      insert(
        addedParts.filter(p => p.id !== holding.id),
        getInsertIndex(),
        holding,
      )
      .map(p => ({ ...p, insert: null }))
    );

    setParts(parts.map(p => {
      if (p.id === holding.id)
        return { ...p, disabled: true };
      return p;
    }));
  };

  const handleDoubleClick =(
    e: React.MouseEvent<HTMLDivElement>,
    { id }: Part
  ) => {
    setAddedParts(addedParts.filter(part => part.id !== id));
    
    setParts(parts.map(p => {
      if (p.id === id)
        return { ...p, disabled: false };
      return p;
    }));
  };
  
  return (
    <div className={generateClass('constructor', className)}>
      <div className='constructor__wrap'>
        {mode === 'constructor' && (
          <Parts
            parts={parts}
            onDragStart={(e, part) => setHolding(part)}
          />
        )}

        <AssemblyZone
          parts={addedParts}
          onPartDragStart={(e, part) => setHolding(part)}
          onPartDragOver={handlePartDragOver}
          onPartDragLeave={handlePartDragLeave}
          onZoneDrop={handleZoneDrop}
          onPartDrop={handlePartDrop}
          onDoubleClick={handleDoubleClick}
        />
      </div>
    </div>
  );
};

export { Constructor };