import { modalInitialState } from '../initialStates';
import { ModalActions, IModalState, ActionType } from '../types';

const modalReducer = (state: IModalState = modalInitialState, action: ModalActions) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.TOGGLE_MODAL: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};

export default modalReducer;
