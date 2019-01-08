import { createAction } from 'redux-act';

export interface IOpenModal {
  id: string;
  payload: any;
}

export const openModal = createAction<IOpenModal>(
  'open modal',
  (id: string, payload: any) => ({ id, payload }),
);

export interface ICloseModal {
  id: string;
}

export const closeModal = createAction<ICloseModal>(
  'close modal',
  (id: string) => ({ id }),
);
