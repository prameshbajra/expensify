import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Card } from 'semantic-ui-react';

const ExpenseListItem = ({ expenses }) => (
    <div className="col-md-10 col-md-offset-1">
        <Card.Group>
            {expenses.map(expense => (
                <Card key={expense[0]}>
                    <Card.Content>
                        <Card.Header> <NavLink to={`/editExpense/${expense[0]}`}> {expense[1]}</NavLink></Card.Header>
                        <Card.Meta>Rs. <b>{expense[4]}</b></Card.Meta>
                        <Card.Description>{expense[2]}</Card.Description>
                        <Card.Meta>{moment(expense[3]).format('MMMM Do, YYYY')}</Card.Meta>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    </div>
);
export default ExpenseListItem;
