import expensesReducers from "../../reducers/expensesReducers";

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

test("should set default state", () => {
    expect(expensesReducers(undefined, { type: "@@INIT" })).toEqual([]);
});

test("should set expenses properly", () => {
    expect(expensesReducers(expenses, { type: "@@INIT" })).toEqual(expenses);
});

test("should add expense to expenses properly", () => {
    const action = {
        type: "ADD_EXPENSE",
        expenses: {
            id: 'HOnor 9i',
            description: 'Some decent 3',
            note: 'Honor 7x is a better pick',
            amount: 120,
            createdAt: 90,
        }
    };
    const result = expensesReducers(expenses, action);
    expect(result.length).toBe(4);
    expect(result).toEqual([...expenses, action.expenses]);
});

test("should remove expenses properly according to id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "two2"
    }
    expect(expenses.length).toBe(3);
    const result = expensesReducers(expenses, action);
    expect(result.length).toBe(2);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses properly according to a invalid id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "nothingmathced"
    }
    expect(expenses.length).toBe(3);
    const result = expensesReducers(expenses, action);
    expect(result.length).toBe(3);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should edit expenses properly according to id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "one1",
        updates: {
            description: 'update one',
            note: 'HononeUPAck',
            amount: 1200,
            createdAt: 3340,
        }
    };
    const result = expensesReducers(expenses, action);
    expect(result[0]).toEqual({
        id: 'one1',
        description: 'update one',
        note: 'HononeUPAck',
        amount: 1200,
        createdAt: 3340
    });
});

test("should not edit expenses properly according to invalid id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "something invalid",
        updates: {
            description: 'update one',
            note: 'HononeUPAck',
            amount: 1200,
            createdAt: 3340,
        }
    };
    const result = expensesReducers(expenses, action);
    expect(result).toEqual(expenses);
});