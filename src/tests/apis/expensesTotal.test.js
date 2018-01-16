import expensesTotal from '../../apis/expensesTotal';

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
    amount: 3000,
    createdAt: 55,
}];

it('should return 0 when no element in arrow', () => {
    expect(expensesTotal([])).toBe(0);
});

it('should give total amount', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(4400);
});