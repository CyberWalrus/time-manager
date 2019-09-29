import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from 'redux-thunk';
import {
  Action as ActionCondition,
  State as StateCondition,
} from 'types/store/condition';
import NameSpace from 'constants/store/name-space';

export interface StateApp {
  [NameSpace.CONDITION]: StateCondition;
}

export type ActionApp = ActionCondition;
export type ThunkDispatch = ReduxThunkDispatch<StateApp, {}, ActionApp>;
export type ThunkAction = ReduxThunkAction<Promise<void>, StateApp,
{},
ActionApp
>;
