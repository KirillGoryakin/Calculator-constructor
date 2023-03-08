import './Constructor.scss';
import { ReactNode, FC, useState } from 'react';
import { AssemblyZone } from './AssemblyZone';
import { Parts } from './Parts';
import { generateClass } from 'utils/generateClass';
import { Mode } from 'types';

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

  const [addedParts, setAddedParts] = useState<ReactNode[]>([]);
  const [holding, setHolding] = useState<ReactNode>(null);
  
  return (
    <div className={generateClass('constructor', className)}>
      <div className='constructor__wrap'>
        {mode === 'constructor' && (
          <Parts
            parts={children}
            onDragStart={(e, part) => setHolding(part)}
            onDragEnd={() => setHolding(null)}
          />
        )}

        <AssemblyZone
          parts={addedParts}
          onDrop={() => setAddedParts(prev => [...prev, holding])}
        />
      </div>
    </div>
  );
};

export { Constructor };