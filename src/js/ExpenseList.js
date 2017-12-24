import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = props => (
    <div >
        {props.expenses.map(expense => (<h6>{expense.description}</h6>))}
    </div>
);

const mapStateToProps = (state => ({
    expenses: state.expenses,
}));

// First parameter vaneko - as a props ma k diney second parameter ma vako component ma ...
// First parameter takes a subpart of store's state and makes it accessible to second component props ...
export default connect(mapStateToProps)(ExpenseList);

