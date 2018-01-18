import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

export class ExpenseListFilters extends Component {
    onChangeSelect = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }
    onChangeInput = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <h3>Filter</h3>
                <input
                    type="text"
                    onChange={this.onChangeInput}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onChangeSelect}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sortByDate: () => { dispatch(sortByDate()); },
    sortByAmount: () => { dispatch(sortByAmount()); },
    setTextFilter: (text) => { dispatch(setTextFilter(text)); },
});
const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

