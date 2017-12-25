import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashBoard = () => (
    <div>
        <h1>DashBoard</h1>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashBoard;
