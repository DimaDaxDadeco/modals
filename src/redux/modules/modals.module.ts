import {
  closeModal,
  ICloseModal,
  IOpenModal,
  openModal,
} from '../actions/modals.actions';
import { IState } from '../state/state.d';

const modalsReducer = {
  [openModal.getType()]: (state: IState, { id, payload }: IOpenModal) => ({
    ...state,
    modals: {
      ...state.modals,
      payloads: {
        ...state.modals.payloads,
        [id]: payload,
      },
      visible: {
        ...state.modals.visible,
        [id]: true,
      },
    },
  }),
  [closeModal.getType()]: (state: IState, { id }: ICloseModal) => ({
    ...state,
    modals: {
      ...state.modals,
      payloads: {
        ...state.modals.payloads,
        [id]: {},
      },
      visible: {
        ...state.modals.visible,
        [id]: false,
      },
    },
  }),
};

export { modalsReducer };
