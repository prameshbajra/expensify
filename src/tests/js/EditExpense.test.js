import React from "react"
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import ExpenseForm from '../../js/ExpenseForm';
import { EditExpense } from "../../js/EditExpense";

const expenses = [{
    id: 'one1',
    description: 'desc 1',
    note: 'Some note 1',
    amount: 200,
    createdAt: 0,
}, {
    id: 'two2',
    description: 'Some 2',
    note: 'Some note 2',
    amount: 1200,
    createdAt: 5,
}, {
    id: 'three3',
    description: 'Some desc 3',
    note: 'Some note 3',
    amount: 3200,
    createdAt: 55,
}];

let editExpenseSpy, removeExpenseSpy, history, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpense
            expense={expenses[1]}
            history={history}
            removeExpense={removeExpenseSpy}
            editExpense={editExpenseSpy} />
    );
});

test("should render edit expense page correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle edit expense and it methods correctly", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test("should handle remove expense and it methods correctly", () => {
    wrapper.find('button').prop('onClick')();
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
}); 