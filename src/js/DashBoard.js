import React from 'react';
import ExpenseList from './ExpenseList';

const DashBoard = props => (
    <div>
        <h1>DashBoard</h1>
        <h3>{props.match.params.id}</h3>
        <ExpenseList />
    </div>
);

export default DashBoard;
