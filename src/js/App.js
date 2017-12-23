import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import Help from './Help';
import NoMatch from './NoMatch';

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route path="/dashboard/:id" component={DashBoard} />
                <Route path="/createExpense" component={CreateExpense} />
                <Route path="/help" component={Help} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
