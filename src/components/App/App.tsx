import './index.scss';
import { AssemblyZone } from '../AssemblyZone';
import { Elements } from '../Elements';
import { ModeSwitch } from './ModeSwitch';

const App = () => {
  return (
    <main className='main-wrap'>
      <ModeSwitch />

      <div className='main-wrap__inner'>
        <Elements />

        <AssemblyZone />
      </div>
    </main>
  );
};

export { App };