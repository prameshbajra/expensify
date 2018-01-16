import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpenses from '../apis/getVisibleExpenses';
import expensesTotal from '../apis/expensesTotal';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const wordToDisplay = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            {expenseCount > 0 ?
                <h1>{expenseCount} {wordToDisplay} totalling : {expenseTotal}</h1> : undefined
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
