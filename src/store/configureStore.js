import {createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';
import { addExpense } from '../actions/expenses';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

