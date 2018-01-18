import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Sidebar, Segment, Button, Menu, Container } from 'semantic-ui-react';

import 'react-dates/lib/css/_datepicker.css';

import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import MenuItems from './MenuItems';
import NoMatch from './NoMatch';
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
                    <Container text>
                        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                        <Sidebar.Pushable as={Segment}>
                            <Sidebar
                                as={Menu}
                                animation="scale down"
                                width="thin"
                                direction="right"
                                visible={visible}
                                icon="labeled"
                                vertical
                                inverted
                            >
                                <MenuItems />
                            </Sidebar>
                            <Switch>
                                <Route exact path="/" component={DashBoard} />
                                <Route path="/createExpense" component={CreateExpense} />
                                <Route path="/editExpense/:id" component={EditExpense} />
                                <Route path="/help" component={Help} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Sidebar.Pushable>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
