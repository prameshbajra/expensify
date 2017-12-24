import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            note: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }
    onNoteChange = () => {

    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.description}
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        value={this.state.note}
                        placeholder="Note"
                        onChange={this.onNoteChange}
                    />
                    <input type="text" placeholder="Amount" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

