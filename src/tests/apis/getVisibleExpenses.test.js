import moment from 'moment';

import getVisibleExpenses from '../../apis/getVisibleExpenses';

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

// Start date and end date ko test cases lekhhya kinaki getVisible ma tini haru lai include gareko xaina ...

test('should filter by text value', () => {
    const filters = {
        text: 'desc',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = getVisibleExpenses(expenses, filters);
    const expectedResult = [expenses[2], expenses[0]];
    expect(result).toEqual(expectedResult);
});

test('should filter by amount value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    };
    const result = getVisibleExpenses(expenses, filters);
    const expectedResult = [expenses[2], expenses[1], expenses[0]];
    expect(result).toEqual(expectedResult);
});

test('should filter by date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = getVisibleExpenses(expenses, filters);
    const expectedResult = [expenses[2], expenses[1], expenses[0]];
    expect(result).toEqual(expectedResult);
});
