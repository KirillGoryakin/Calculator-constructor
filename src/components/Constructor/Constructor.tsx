import './Constructor.scss';
import { ReactNode, FC, useState } from 'react';
import { AssemblyZone } from './AssemblyZone';
import { Parts } from './Parts';
import { generateClass } from 'utils/generateClass';
import { Mode, Part } from 'types';

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

  const [parts, setParts] = useState(children.map((node, i) => ({
    id: i,
    node,
    disabled: false,
  })));
  const [addedParts, setAddedParts] = useState<Part[]>([]);
  const [holding, setHolding] = useState<Part | null>(null);

  const handleDrop = () => {
    if (holding) {
      setAddedParts(prev => [...prev, holding]);
      
      setParts(parts.map(part => {
        if (part.id === holding.id)
          return { ...part, disabled: true };
        return part;
      }));

      setHolding(null);
    }
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
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
};

export { Constructor };