import filtersReducers from '../../reducers/filtersReducers';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined,
    });
});

test('should setup sortByAmount', () => {
    const state = filtersReducers(undefined, { type: 'AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

test('should setup sortByAmount - when state is not undefined', () => {
    const state = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date',
    };
    const result = filtersReducers(state, { type: 'AMOUNT' });
    expect(result.sortBy).toEqual('amount');
});

test('should setup sortByDate', () => {
    const state = filtersReducers(undefined, { type: 'DATE' });
    expect(state.sortBy).toEqual('date');
});

test('should setup sortByDate - when state is not undefined', () => {
    const state = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const result = filtersReducers(state, { type: 'DATE' });
    expect(result.sortBy).toEqual('date');
});

test('should setup startDate', () => {
    const state = filtersReducers(undefined, { type: 'START_DATE', startDate: 1516127319 });
    expect(state.startDate).toEqual(1516127319);
});

test('should setup endDate', () => {
    const state = filtersReducers(undefined, { type: 'END_DATE', endDate: 15163456370 });
    expect(state.endDate).toEqual(15163456370);
});

test('should setup setText', () => {
    const state = filtersReducers(undefined, { type: 'SET_TEXT', text: 'Something to test only' });
    expect(state.text).toEqual('Something to test only');
});

test('should setup setText - when state is not undefined', () => {
    const state = {
        text: 'Something old here',
        startDate: undefined,
        endDate: undefined,
        sortBy: '',
    };
    const result = filtersReducers(state, { type: 'SET_TEXT', text: 'New and sweet' });
    expect(result.text).toEqual('New and sweet');
});
