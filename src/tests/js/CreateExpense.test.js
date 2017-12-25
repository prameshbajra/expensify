import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { CreateExpense } from "../../js/CreateExpense";

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

let onSubmitSpy, history, wrapper;
beforeEach(() => {
    onSubmitSpy = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<CreateExpense history={history} onSubmitFromProps={onSubmitSpy} />);
});

test("should render add expense page correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render add expense page correctly", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
}); 