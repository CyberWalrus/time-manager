import { combineReducers } from 'redux';
import { StateApp } from 'types/store/reducer';
import { initialState as initialStateCondition, reducer as condition } from './condition';
import NameSpace from 'constants/store/name-space';

export const initialState = {
  [NameSpace.CONDITION]: initialStateCondition,
};
export default combineReducers<StateApp>({
  [NameSpace.CONDITION]: condition,
});
