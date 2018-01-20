import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react';

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
            <div className="row">
                <div className="col-md-8">
                    <Input
                        fluid
                        placeholder="Find what you are looking for ... "
                        icon="search"
                        onChange={this.onChangeInput}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="ui fluid dropdown"
                        value={this.props.filters.sortBy}
                        onChange={this.onChangeSelect}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
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

