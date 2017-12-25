import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';


const ExpenseListFilters = props => (
    /* eslint-disable */
    <div>
        <h1>Filter</h1>
        <input
            type="text"
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === "date") {
                    props.dispatch(sortByDate())
                } else if (e.target.value === "amount") {
                    props.dispatch(sortByAmount());
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
    /* eslint-enable */
);

export default connect(state => ({ filters: state.filters }))(ExpenseListFilters);

