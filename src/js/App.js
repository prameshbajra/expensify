import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'react-dates/lib/css/_datepicker.css';

import Header from './Header';
import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import NoMatch from './NoMatch';
import store from '../store/store';

const storeInstance = store();
const App = () => (
    <Provider store={storeInstance}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route path="/createExpense" component={CreateExpense} />
                    <Route path="/editExpense/:id" component={EditExpense} />
                    <Route path="/help" component={Help} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
