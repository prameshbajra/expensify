export const sortByAmount = () => ({
    type: 'AMOUNT',
});

export const sortByDate = () => ({
    type: 'DATE',
});

export const setStartDate = startDate => ({
    type: 'START_DATE',
    startDate,
});

export const setEndDate = endDate => ({
    type: 'END_DATE',
    endDate,
});

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text,
});
