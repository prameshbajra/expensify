import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import firebase, { database } from '../firebase/firebase';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class CreateExpense extends Component {
    onSubmit = (expense) => {
        const currentUserUid = firebase.auth().currentUser.uid;
        database.ref(`users/${currentUserUid}/expenses`)
            .push(expense)
            .then(() => {
                this.props.addExpense(expense);
                this.props.history.push('/');
            });
    }
    render() {
        return (
            <div>
                <Header textAlign="center" color="grey">Create Expense</Header>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
