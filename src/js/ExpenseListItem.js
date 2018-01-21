import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ expenses }) => (
    <div>
        {expenses.map(expense => (
            <div key={expense[0]}>
                <h3><NavLink to={`/editExpense/${expense[0]}`}> {expense[1]}</NavLink></h3>
                <p>{expense[2]}</p>
                <p>{expense[4]}</p>
                <small>{moment(expense[3]).format('MMMM Do, YYYY')}</small>
            </div>
        ))}
    </div>
);

export default ExpenseListItem;
