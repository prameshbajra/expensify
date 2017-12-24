import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

// dispatch chai connect() without args nai aaunxa ...
// ani expenses chai parent comp le pass gareko prop ho ...
// eslint-disable-next-line
const ExpenseListItem = ({ dispatch, expenses }) => (
    <div>
        {expenses.map(({
            description, id, amount, note, createdAt,
        }) => (
            <div key={id}>
                <p>{description}</p>
                <p>{note}</p>
                <p>{amount}</p>
                <small>{createdAt}</small>
                <button onClick={() => {
                    dispatch(removeExpense({ id }));
                }}
                >
                        Remove
                </button>
            </div>
        ))}
    </div>
);

export default connect()(ExpenseListItem);
