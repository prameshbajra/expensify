import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { database } from '../firebase/firebase';
import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpense extends Component {
    onSubmit = (expense) => {
        // Updating the data ...
        database.ref('expenses')
            .child(expense.id)
            .update({
                description: expense.description,
                note: expense.note,
                amount: expense.amount,
                createdAt: expense.createdAt,
            })
            .then(() => {
                this.props.history.push('/');
            });
    }
    onClick = () => {
        database.ref('expenses')
            .child(this.props.match.params.id)
            .remove(() => {
                this.props.history.push('/');
            });
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
                    id={this.props.match.params.id}
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
