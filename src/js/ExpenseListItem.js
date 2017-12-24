import React from 'react';

// eslint-disable-next-line
const ExpenseListItem = ({ expenses }) => (
    <div>
        {expenses.map(({
            description, id, amount, note, createdAt,
        }) => (
            <div key={id}>
                <p>{description}</p>
                <p>{note}</p>
                <p>{amount}</p>
                <small>{createdAt}</small>
            </div>
        ))}
    </div>
);

export default ExpenseListItem;
