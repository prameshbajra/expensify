import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Button, Divider } from 'semantic-ui-react';
import createHistory from 'history/createBrowserHistory';
import 'react-dates/lib/css/_datepicker.css';

import Body from './Body';
import store from '../store/store';

const storeInstance = store();
export const history = createHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleSidebar = () => this.setState({ visible: false });
    render() {
        const { visible } = this.state;
        return (
            <Provider store={storeInstance}>
                <Router history={history}>
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
                            <Body visible={visible} sideBarHandler={this.toggleSidebar} />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
