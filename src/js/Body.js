import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';

import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import MenuItems from './MenuItems';
import NoMatch from './NoMatch';

const Body = props => (
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
                        <Route exact path="/" component={DashBoard} />
                        <Route path="/createExpense" component={CreateExpense} />
                        <Route path="/editExpense/:id" component={EditExpense} />
                        <Route path="/help" component={Help} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default Body;
