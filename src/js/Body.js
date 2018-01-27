import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar, Segment, Menu, Button } from 'semantic-ui-react';

import LoginPage from './LoginPage';
import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import About from './About';
import MenuItems from './MenuItems';
import NoMatch from './NoMatch';

import firebase from '../firebase/firebase';

const logOutHandler = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('Signed out');
    }).catch((error) => {
        console.log(error);
        // An error happened.
    });
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
                    <div
                        id="body"
                        role="presentation"
                        onClick={() => { props.sideBarHandler(); }}
                        onKeyPress={() => { props.sideBarHandler(); }}
                    >
                        <Switch>
                            <Route exact path="/" component={LoginPage} />
                            <Route exact path="/DashBoard" component={DashBoard} />
                            <Route path="/createExpense" component={CreateExpense} />
                            <Route path="/editExpense/:id" component={EditExpense} />
                            <Route path="/help" component={Help} />
                            <Route path="/about" component={About} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </div>
);

export default Body;
