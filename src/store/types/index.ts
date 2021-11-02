export enum ActionType {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
}

export interface IModalState {
  visible: boolean;
}

export interface ToggleModal {
  type: ActionType.TOGGLE_MODAL;
  payload: IModalState;
}

export type ModalActions = ToggleModal;
