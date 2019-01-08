import { IState } from '../state/state.d';

export const isModalOpen = (state: IState, id: string) => state.modals.visible[id];
export const getModalPayload = (state: IState, id: string) => state.modals.payloads[id] || {};
