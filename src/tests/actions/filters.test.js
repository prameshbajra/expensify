import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from '../../actions/filters';

test('should return sortByAmount action object', () => {
    const result = sortByAmount();
    const expectedResult = {
        type: "AMOUNT"
    };
    expect(result).toEqual(expectedResult);
});

test('should return sortByDate action object', () => {
    const result = sortByDate();
    const expectedResult = {
        type: "DATE"
    };
    expect(result).toEqual(expectedResult);
});

test('should return setStartDate action object', () => {
    const result = setStartDate(156271283126);
    const expectedResult = {
        type: "START_DATE",
        startDate: 156271283126
    };
    expect(result).toEqual(expectedResult);
});

test('should return setEndDate action object', () => {
    const result = setEndDate(156271283126);
    const expectedResult = {
        type: 'END_DATE',
        endDate: 156271283126
    };
    expect(result).toEqual(expectedResult);
});

test('should return setTextFilter action object when some value is passed', () => {
    const result = setTextFilter('Suzal');
    const expectedResult = {
        type: 'SET_TEXT',
        text: 'Suzal'
    };
    expect(result).toEqual(expectedResult);
});

test('should return setTextFilter action object when nothing is passed', () => {
    const result = setTextFilter();
    const expectedResult = {
        type: 'SET_TEXT',
        text: ''
    };
    expect(result).toEqual(expectedResult);
});
