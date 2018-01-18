import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Button, Divider } from 'semantic-ui-react';
import 'react-dates/lib/css/_datepicker.css';

import Body from './Body';
import store from '../store/store';

const storeInstance = store();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state;
        return (
            <Provider store={storeInstance}>
                <BrowserRouter>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <Divider horizontal>
                                <h1>Tab Expense</h1>
                            </Divider>
                            <Button
                                circular
                                basic
                                color="black"
                                floated="right"
                                icon="settings"
                                onClick={this.toggleVisibility}
                            />
                            <Body visible={visible} />
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
