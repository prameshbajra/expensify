import React from 'react';
import ExpenseList from './ExpenseList';

import ExpenseListFilters from './ExpenseListFilters';

/* eslint-disable */
const DashBoard = props => (
    <div>
        <h1>DashBoard</h1>
        <h3>{props.match.params.id}</h3>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
/* eslint-enable */

export default DashBoard;
