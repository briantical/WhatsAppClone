import React, { createContext } from 'react';

import { modalInitialState } from '../initialStates';
import { IModalState, ModalActions } from '../types';

const ModalContext = createContext<{ state: IModalState; dispatch: React.Dispatch<ModalActions> }>({
  state: modalInitialState,
  dispatch: () => undefined,
});

export default ModalContext;
