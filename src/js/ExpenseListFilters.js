import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


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
    </div>
    /* eslint-enable */
);

export default connect(state => ({ filters: state.filters }))(ExpenseListFilters);
