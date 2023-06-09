import { Switch } from 'components/Switch';
import { SwitchItem } from 'components/Switch/SwitchItem';
import { ReactComponent as EyeIcon} from 'assets/icons/eye.svg';
import { ReactComponent as SelectorIcon } from 'assets/icons/selector.svg';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setMode } from 'store/slices/modeSlice';
import { Mode } from 'types';
import { reset } from 'store/slices/calculatorSlice';

const ModeSwitch = () => {
  const dispatch = useAppDispatch();

  const handleSwitch = (value: string) => {
    dispatch(setMode(value as Mode));
    dispatch(reset());
  };
  
  return (
    <Switch
      defaultValue='constructor'
      onSwitch={handleSwitch}
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