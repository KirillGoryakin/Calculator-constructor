import { Switch } from 'components/Switch';
import { SwitchItem } from 'components/Switch/SwitchItem';
import { ReactComponent as EyeIcon} from 'assets/icons/eye.svg';
import { ReactComponent as SelectorIcon } from 'assets/icons/selector.svg';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setMode } from 'store/slices/modeSlice';
import { Mode } from 'types';

const ModeSwitch = () => {
  const dispatch = useAppDispatch();
  
  return (
    <Switch
      defaultValue='constructor'
      onSwitch={value => dispatch(setMode(value as Mode))}
      className='main-wrap__switch'
    >
      <SwitchItem
        label='Runtime'
        icon={<EyeIcon />}
        value='runtime'
      />
      <SwitchItem
        label='Constructor'
        icon={<SelectorIcon />}
        value='constructor'
      />
    </Switch>
  );
};

export { ModeSwitch };