import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar, Segment, Menu, Button } from 'semantic-ui-react';

import LoginPage from './LoginPage';
import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import About from './About';
import PrivateRoute from './PrivateRoute';
import MenuItems from './MenuItems';
import NoMatch from './NoMatch';

import firebase from '../firebase/firebase';

const logOutHandler = () => {
    firebase.auth().signOut();
};

const buttonSignOut = () => {
    // Render sign out button only if user is logged in ...
    if (firebase.auth().currentUser) {
        return (
            <Button
                circular
                onClick={logOutHandler}
            >
                Sign Out
            </Button>);
    }
    return null;
};

const Body = props => (
    <div>
        {buttonSignOut()}
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation="scale down"
                width="thin"
                direction="right"
                visible={props.visible}
                icon="labeled"
                vertical
                inverted
            >
                <MenuItems />
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    <div id="body">
                        <Switch>
                            <Route exact path="/" component={LoginPage} />
                            <PrivateRoute
                                path="/DashBoard"
                                component={DashBoard}
                                currentUser={firebase.auth().currentUser}
                            />
                            <PrivateRoute
                                path="/createExpense"
                                component={CreateExpense}
                                currentUser={firebase.auth().currentUser}
                            />
                            <PrivateRoute
                                path="/editExpense/:id"
                                component={EditExpense}
                                currentUser={firebase.auth().currentUser}
                            />
                            <Route path="/help" component={Help} />
                            <Route path="/about" component={About} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div >
);

export default Body;
