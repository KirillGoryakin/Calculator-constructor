import './index.scss';
import { AssemblyZone } from '../AssemblyZone';
import { Elements } from '../Elements';
import { ModeSwitch } from './ModeSwitch';

const App = () => {
  return (
    <main className='main-wrap'>
      <ModeSwitch />

      <Elements />

      <AssemblyZone />
    </main>
  );
};

export { App };