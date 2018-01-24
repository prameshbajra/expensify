import React, { Component } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Input, Button, Header } from 'semantic-ui-react';

import { database } from '../firebase/firebase';

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
    componentWillMount() {
        if (this.props.id) {
            database.ref('expenses')
                .child(this.props.id)
                .once('value')
                .then((snapshot) => {
                    const recValue = snapshot.val();
                    this.setState(() => ({
                        description: recValue.description,
                        amount: recValue.amount,
                        date: recValue.date,
                        note: recValue.note,
                    }));
                });
        }
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
    clearAllState = () => {
        this.setState(() => ({
            description: '',
            amount: '',
            note: '',
        }));
    }
    render() {
        return (
            <div>
                {this.state.errorState &&
                    <div className=" col-md-6 col-md-offset-3 alert alert-danger text-center">
                        <b>{this.state.errorState}</b>
                    </div>}
                <div className="row" id="form-create-expense">
                    <div className="col-md-6 col-md-offset-3">
                        <Input
                            fluid
                            type="text"
                            value={this.state.description}
                            placeholder="Description"
                            onChange={this.onDescriptionChange}
                        />
                        <br />
                        <div className="row">
                            <div className="col-md-8">
                                <Input
                                    fluid
                                    type="text"
                                    value={this.state.amount}
                                    placeholder="Amount"
                                    onChange={this.onAmountChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <SingleDatePicker
                                    small
                                    date={this.state.createdAt}
                                    onDateChange={this.onDateChange}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}
                                />
                            </div>
                        </div>
                        <br />
                        <Input
                            fluid
                            type="text"
                            value={this.state.note}
                            placeholder="Note"
                            onChange={this.onNoteChange}
                        />
                        <br />
                        <Button.Group fluid>
                            <Button
                                positive
                                onClick={this.onSubmit}
                            >Save
                            </Button>
                            <Button.Or />
                            <Button
                                negative
                                onClick={this.clearAllState}
                            >Reset
                            </Button>
                        </Button.Group>
                    </div>
                </div>
                <Header
                    as="h6"
                    color="grey"
                    className="text-center align-bottom"
                >
                    &quot; Thank you very much for using the application. &quot;
                    <br /><br />
                    (Made by -
                    <a
                        rel="noopener noreferrer"
                        href="http://bajracharya.me"
                        target="_blank"
                    >Pramesh Bajracharya
                    </a>)
                </Header>
            </div >
        );
    }
}

