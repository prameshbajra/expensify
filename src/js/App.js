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
import { setTextFilter } from '../actions/filters';

const storeInstance = store();

storeInstance.dispatch(addExpense({
    description: 'Suzal is getting good at this.',
    amount: 90000,
    note: 'Team Lead',
    createdAt: 234521,
}));
storeInstance.dispatch(addExpense({
    description: 'Pramesh is getting good at many things.',
    amount: 190000,
    note: 'CTO',
    createdAt: 102123,
}));
storeInstance.dispatch(setTextFilter('Pramesh'));
setTimeout(() => {
    storeInstance.dispatch(setTextFilter('Suzal'));
}, 2000);

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
