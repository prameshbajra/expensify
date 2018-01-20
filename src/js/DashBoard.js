import React from 'react';
import { Header } from 'semantic-ui-react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashBoard = () => (
    <div>
        <Header color="grey" >DashBoard</Header>
        <ExpenseListFilters />
        <ExpenseList />
        <ExpensesSummary />
    </div>
);

export default DashBoard;
