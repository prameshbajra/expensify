import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

import store from './store/store';
import getVisibleExpenses from './apis/getVisibleExpenses';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';

const storeInstance = store();

const unsubscribe = storeInstance.subscribe(() => {
    const state = storeInstance.getState();
    const getVisibles = getVisibleExpenses(state.expenses, state.filters);
    console.log(getVisibles);
});

const one = storeInstance.dispatch(addExpense({
    description: 'General dispatch',
    note: 'Pramesh Bajracharya',
    amount: 20000,
    createdAt: 1000,
}));
const two = storeInstance.dispatch(addExpense({
    description: 'Generasdfasdf',
    note: 'Pramesh Suzal',
    amount: 40000,
    createdAt: -1000,
}));
const three = storeInstance.dispatch(addExpense({
    description: 'General manager',
    note: 'Pramesh Bajracharya',
    amount: 120000,
    createdAt: 125,
}));

storeInstance.dispatch(editExpense(two.expenses.id, { amount: 90000 }));
storeInstance.dispatch(setTextFilter('dispatchs'));
storeInstance.dispatch(setTextFilter());

storeInstance.dispatch(sortByDate());
storeInstance.dispatch(sortByAmount());

storeInstance.dispatch(setStartDate(0));
storeInstance.dispatch(setEndDate(999));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// const demoState = {
//     expenses: [{
//         id: 'some',
//         description: 'suzal',
//         note: 'this was',
//         amount: 900,
//         createdAt: 0,
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined,
//     },
// };

unsubscribe();
