import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './Header';
import DashBoard from './DashBoard';
import CreateExpense from './CreateExpense';
import Help from './Help';
import NoMatch from './NoMatch';
import store from '../store/store';
import { addExpense } from '../actions/expenses';

const storeInstance = store();

storeInstance.subscribe(() => {
    console.log(storeInstance.getState());
});

storeInstance.dispatch(addExpense({ description: 'Suzal Bajracharya' }));

const App = () => (
    <Provider store={storeInstance}>
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
    </Provider>
);

export default App;
