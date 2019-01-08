export interface IModalsState {
  payloads: {
    [key: string]: {};
  };
  visible: {
    [key: string]: boolean;
  };
}

export const state: IModalsState = {
  payloads: {},
  visible: {},
};
