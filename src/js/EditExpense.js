import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpense extends Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <Button
                        fluid
                        negative
                        onClick={this.onClick}
                    >
                        Remove
                    </Button>
                    <br /><br />
                </div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
});
const mapDispatchToProps = dispatch => ({
    editExpense: (id, expense) => { dispatch(editExpense(id, expense)); },
    removeExpense: (id) => { dispatch(removeExpense(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
