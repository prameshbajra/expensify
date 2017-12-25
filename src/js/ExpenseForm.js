import React, { Component } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: '',
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) { this.setState(() => ({ createdAt })); }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                errorState: 'Sorry but you cannot leave these fields empty ...',
            }));
        } else {
            this.setState(() => ({
                errorState: '',
            }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.errorState && <p>{this.state.errorState}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.note}
                        placeholder="Note"
                        onChange={this.onNoteChange}
                    />
                    <input
                        type="text"
                        value={this.state.amount}
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

