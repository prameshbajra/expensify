import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ expenses }) => (
    <div>
        {expenses.map(({
            description, id, amount, note, createdAt,
        }) => (
            <div key={id}>
                <h3><NavLink to={`/editExpense/${id}`}> {description}</NavLink></h3>
                <p>{note}</p>
                <p>{amount}</p>
                <small>{moment(createdAt).format('MMMM Do, YYYY')}</small>
            </div>
        ))}
    </div>
);

export default ExpenseListItem;
