import { createStore, combineReducers } from 'redux';

import expensesReducers from '../reducers/expensesReducers';
import filtersReducers from '../reducers/filtersReducers';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducers,
        }),
        // eslint-disable-next-line
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};

