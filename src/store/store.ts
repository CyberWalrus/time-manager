import { combineReducers } from 'redux';
import { StateApp } from 'types/store/reducer';
import NameSpace from 'constants/store/name-space';
import {
  initialState as initialStateCondition,
  reducer as condition,
} from './condition';

export const initialState = {
  [NameSpace.CONDITION]: initialStateCondition,
};
export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
});
