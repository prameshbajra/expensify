import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import moment from "moment";

import ExpenseForm from "../../js/ExpenseForm";

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

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render error for invalid form submit", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errorState').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: "new desc"
        }
    });
    expect(wrapper.state('description')).toBe('new desc');
});

test("should set note on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: "some new thinginside note."
        }
    });
    expect(wrapper.state('note')).toBe('some new thinginside note.');
});

test("should set amount on input change - if valid data is passed", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: {
            value: "123.12"
        }
    });
    expect(wrapper.state('amount')).toBe('123.12');
});

test("should set amount on input change - if invalid data is passed", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: {
            value: "123.112"
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

test("should call onSubmit with the valid args", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errorState')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: 'desc 1',
        note: 'Some note 1',
        amount: 200,
        createdAt: 0,
    });
});

// Method “props” is only meant to be run on a single node. 0 found instead. Error aayo 
// Somehow SingleDatePicker wapper ma find nai vairya xaina ...

// test("should set new date on date change", () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test("should set new fo on date change", () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
//     expect(wrapper.state('calendarFocused')).toBeTruthy();
// });