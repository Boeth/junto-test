import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import {loadState, saveState} from './localStorage'

const persistedState = loadState();

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

const store = createStore(rootReducer, persistedState)

store.subscribe(()=>{
  saveState(
   {expenses: store.getState().expenses}
  );
})

export default store;
