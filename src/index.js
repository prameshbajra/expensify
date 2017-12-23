import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import uuid from 'uuid';
// import { createStore, combineReducers } from 'redux';

// // Setting up method to filter and sort data ...
// const getVisibleExpenses = (expenses, {
//     text, sortBy, startDate, endDate,
// }) => expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//     return startDateMatch && endDateMatch && textMatch;
// }).sort((a, b) => {
//     if (sortBy === 'date') {
//         return a.createdAt < b.createdAt ? 1 : -1;
//     } else if (sortBy === 'amount') {
//         return a.amount < b.amount ? 1 : -1;
//     } return 0;
// });

// // action generators ...
// const addExpense = ({
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0,
// } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expenses: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt,
//     },
// });

// const removeExpense = ({ id }) => ({
//     type: 'REMOVE_EXPENSE',
//     id,
// });

// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates,
// });

// const sortByAmount = () => ({
//     type: 'AMOUNT',
// });

// const sortByDate = () => ({
//     type: 'DATE',
// });

// const setStartDate = startDate => ({
//     type: 'START_DATE',
//     startDate,
// });

// const setEndDate = endDate => ({
//     type: 'END_DATE',
//     endDate,
// });

// // reducers ...
// const expensesReducers = (state = [], action) => {
//     switch (action.type) {
//     case 'ADD_EXPENSE':
//         return [...state, action.expenses];
//     case 'REMOVE_EXPENSE':
//         return state.filter(expense => expense.id !== action.id);
//     case 'EDIT_EXPENSE':
//         return state.map((expense) => {
//             if (expense.id === action.id) {
//                 return { ...expense, ...action.updates };
//             }
//             return expense;
//         });
//     default:
//         return state;
//     }
// };

// const defaultFilters = {
//     text: '',
//     sortBy: '',
//     startDate: undefined,
//     endDate: undefined,
// };

// const filtersReducers = (state = defaultFilters, action) => {
//     switch (action.type) {
//     case 'SET_TEXT':
//         return {
//             ...state,
//             text: action.text,
//         };
//     case 'AMOUNT':
//         return {
//             ...state,
//             sortBy: 'amount',
//         };
//     case 'DATE':
//         return {
//             ...state,
//             sortBy: 'date',
//         };
//     case 'START_DATE':
//         return {
//             ...state,
//             startDate: action.startDate,
//         };
//     case 'END_DATE':
//         return {
//             ...state,
//             endDate: action.endDate,
//         };
//     default:
//         return state;
//     }
// };

// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT',
//     text,
// });

// // Store creation ...
// const store = createStore(combineReducers({
//     expenses: expensesReducers,
//     filters: filtersReducers,
// }));

// const unsubscribe = store.subscribe(() => {
//     const state = store.getState();
//     const getVisibles = getVisibleExpenses(state.expenses, state.filters);
//     console.log(getVisibles);
// });

// const one = store.dispatch(addExpense({
//     description: 'General dispatch',
//     note: 'Pramesh Bajracharya',
//     amount: 20000,
//     createdAt: 1000,
// }));
// const two = store.dispatch(addExpense({
//     description: 'Generasdfasdf',
//     note: 'Pramesh Suzal',
//     amount: 40000,
//     createdAt: -1000,
// }));
// const three = store.dispatch(addExpense({
//     description: 'General manager',
//     note: 'Pramesh Bajracharya',
//     amount: 120000,
//     createdAt: 125,
// }));

// // store.dispatch(editExpense(two.expenses.id, { amount: 90000 }));
// // store.dispatch(setTextFilter('dispatchs'));
// // store.dispatch(setTextFilter());

// // store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// // store.dispatch(setStartDate(0));
// // store.dispatch(setEndDate(999));

// // const demoState = {
// //     expenses: [{
// //         id: 'some',
// //         description: 'suzal',
// //         note: 'this was',
// //         amount: 900,
// //         createdAt: 0,
// //     }],
// //     filters: {
// //         text: 'rent',
// //         sortBy: 'amount',
// //         startDate: undefined,
// //         endDate: undefined,
// //     },
// // };

// unsubscribe();
