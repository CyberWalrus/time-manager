import { ActionType } from 'constants/store/condition';
import { SetMessage } from 'types/store/condition';

export const ActionCreator = {
  setMessage: (value: string): SetMessage => ({
    payload: value,
    type: ActionType.SET_MESSAGE,
  }),
};
