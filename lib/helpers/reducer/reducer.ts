export enum StateKey {
  APP = 'app',
  USER = 'user',
  CONTROL = 'control',
  INPUTS = 'inputs',
  ERRORS = 'errors',
  ASSETS = 'assets',
  DATA = 'data',
  TEXTS = 'texts',
  LINKS = 'links',
}

// TODO: state any
export function reducer(state: any, action: { [key: string]: any }) {
  switch (action.type) {
    case StateKey.APP: {
      const app = {
        ...state.app,
        ...action.value,
      };

      const newStore = { ...state, app };

      return newStore;
    }

    case StateKey.DATA: {
      const data = {
        ...state.data,
        ...action.value,
      };

      const newStore = { ...state, data };

      return newStore;
    }
    case StateKey.CONTROL: {
      const control = {
        ...state.control,
        ...action.value,
      };

      const newStore = { ...state, control };

      return newStore;
    }
    case StateKey.INPUTS: {
      const inputs = {
        ...state.inputs,
        ...action.value,
      };

      const newStore = { ...state, inputs };

      return newStore;
    }
    case StateKey.ERRORS: {
      const errors = {
        ...state.errors,
        ...action.value,
      };

      const newStore = { ...state, errors };

      return newStore;
    }
    default:
      return state;
  }
}
