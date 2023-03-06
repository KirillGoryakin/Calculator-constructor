import { createContext } from 'react';

type SwitchContext = {
  value: string;
  setValue: (value: string) => void;
};

const defaultValue: SwitchContext = {
  value: '',
  setValue: () => {},
};

export default createContext<SwitchContext>(defaultValue);