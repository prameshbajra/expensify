import React, { Component } from 'react';
import { connect } from 'react-redux';

import { database } from '../firebase/firebase';
import getVisibleExpenses from '../apis/getVisibleExpenses';
import expensesTotal from '../apis/expensesTotal';

export class ExpensesSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseLength: undefined,
            expenseTotal: undefined,
        };
    }
    componentWillMount() {
        database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const dataReceived = snapshot.val();
                if (dataReceived) {
                    const expensesArrayFromFirebase =
                        Object.keys(dataReceived)
                            .map(a => [
                                a,
                                dataReceived[a].description,
                                dataReceived[a].note,
                                dataReceived[a].createdAt,
                                dataReceived[a].amount]);
                    let sum = 0;
                    const expTotal = expensesArrayFromFirebase
                        .map((val) => {
                            sum += parseInt(val[4], 10);
                            return sum;
                        });
                    this.setState(() => ({
                        expenseLength: expensesArrayFromFirebase.length,
                        expenseTotal: expTotal[expTotal.length - 1],
                    }));
                }
            });
    }
    render() {
        return (
            <div>
                <hr />
                {this.state.expenseLength > 0 ?
                    <h2 className="text-center">
                        {this.state.expenseLength} expenses with {this.state.expenseTotal} rupees.
                    </h2> :
                    undefined
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
