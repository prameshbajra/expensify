import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line
const ExpenseListItem = ({ dispatch, expenses }) => (
    <div>
        {expenses.map(({
            description, id, amount, note, createdAt,
        }) => (
            <div key={id}>
                <h3><NavLink to={`/editExpense/${id}`}> {description}</NavLink></h3>
                <p>{note}</p>
                <p>{amount}</p>
                <small>{createdAt}</small>
            </div>
        ))}
    </div>
);

export default ExpenseListItem;
