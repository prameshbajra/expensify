import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../apis/getVisibleExpenses';

// eslint-disable-next-line
const ExpenseList = ({ expenses }) => (
    <div >
        <ExpenseListItem expenses={expenses} />
    </div>
);

const mapStateToProps = (state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
}));

// First parameter vaneko - as a props ma k diney second parameter ma vako component ma ...
// First parameter takes a subpart of store's state
// and makes it accessible to second component props ...
export default connect(mapStateToProps)(ExpenseList);

