import React from 'react';
/* eslint-disable */
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashBoard = props => (
    <div>
        <h1>DashBoard</h1>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
/* eslint-enable */

export default DashBoard;
