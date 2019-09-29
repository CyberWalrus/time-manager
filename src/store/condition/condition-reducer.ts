import { State, Action } from 'types/store/condition';
import { ActionType } from 'constants/store/condition';

export const initialState: State = {
  message: 'test'
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
