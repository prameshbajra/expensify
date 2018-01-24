// action generators ...
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        description,
        note,
        amount,
        createdAt,
    },
});

export const removeExpense = id => ({
    type: 'REMOVE_EXPENSE',
    id,
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

