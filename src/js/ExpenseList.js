import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { database } from '../firebase/firebase';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../apis/getVisibleExpenses';

export class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: props.expenses,
        };
    }
    componentWillMount() {
        database.ref('expenses')
            .on('value', (snapshot) => {
                const dataReceived = snapshot.val();
                const expensesArrayFromFirebase =
                    Object.keys(dataReceived)
                        .map(a => [
                            a,
                            dataReceived[a].description,
                            dataReceived[a].note,
                            dataReceived[a].createdAt,
                            dataReceived[a].amount]);
                this.setState(() => ({
                    expenses: expensesArrayFromFirebase,
                }));
            });
    }
    render() {
        return (
            <div className="row">
                <hr />
                {
                    this.state.expenses.length === 0 ? (
                        <Header as="h2" color="grey" textAlign="center">No expenses</Header>
                    ) : (
                        <ExpenseListItem expenses={this.state.expenses} />
                    )
                }
            </div >
        );
    }
}

const mapStateToProps = (state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters),
}));

// First parameter vaneko - as a props ma k diney second parameter ma vako component ma ...
// First parameter takes a subpart of store's state
// and makes it accessible to second component props ...
export default connect(mapStateToProps)(ExpenseList);

