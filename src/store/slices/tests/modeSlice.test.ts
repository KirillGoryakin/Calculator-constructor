import reducer from '../modeSlice';
import { ModeState, setMode } from '../modeSlice';

describe('modeSlice', () => { 
  it('should change mode with setMode action', () => {
    let state: ModeState = { mode: 'constructor' };

    state = reducer(state, setMode('constructor'));
    expect(state.mode).toEqual('constructor');

    state = reducer(state, setMode('runtime'));
    expect(state.mode).toEqual('runtime');

    state = reducer(state, setMode('runtime'));
    expect(state.mode).toEqual('runtime');

    state = reducer(state, setMode('constructor'));
    expect(state.mode).toEqual('constructor');
  });  
});

export {};