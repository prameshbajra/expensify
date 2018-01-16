import { ExpensesSummary } from '../../js/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';

it('should properly render when one expense is there', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={200} />);
    expect(wrapper).toMatchSnapshot();
});

it('should properly render when one expense is there', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={100} expensesTotal={80190918200} />);
    expect(wrapper).toMatchSnapshot();
})