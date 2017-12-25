import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../js/ExpenseListItem';

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

test('', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
