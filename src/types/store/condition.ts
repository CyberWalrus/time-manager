import { Action as ReduxAction } from 'redux';
import { ActionType } from 'constants/store/condition';

export interface State {
  message: string;
}

export interface SetMessage extends ReduxAction {
  payload: string;
  type: ActionType.SET_MESSAGE;
}

export type Action = SetMessage;
