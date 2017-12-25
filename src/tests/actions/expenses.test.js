import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const result = removeExpense('someidvalue - 5e7sh32kd8shw3n');
    const expectedResult = {
        type: 'REMOVE_EXPENSE',
        id: 'someidvalue - 5e7sh32kd8shw3n',
    };
    expect(result).toEqual(expectedResult);
});

test('should set up edit expense action object', () => {
    const updates = {
        id: 'someid123',
        description: 'Some new desc',
        note: 'Some new updated note',
        amount: '101010',
    };
    const result = editExpense(updates.id, updates);
    const expectedResult = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates,
    };
    expect(result).toEqual(expectedResult);
});

test('should set up add expense action object when some expense data is passed', () => {
    const expense = {
        description: 'Some desc',
        note: 'Some note',
        amount: 100,
        createdAt: 150010232,
    };
    const result = addExpense(expense);
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expenses: {
            ...expense,
            id: expect.any(String),
        },
    };
    expect(result).toEqual(expectedResult);
});
test('should set up add expense action object when default is to be tested', () => {
    const result = addExpense();
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    };
    expect(result).toEqual(expectedResult);
});
