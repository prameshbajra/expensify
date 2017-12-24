const defaultFilters = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined,
};

const filtersReducers = (state = defaultFilters, action) => {
    switch (action.type) {
    case 'SET_TEXT':
        return {
            ...state,
            text: action.text,
        };
    case 'AMOUNT':
        return {
            ...state,
            sortBy: 'amount',
        };
    case 'DATE':
        return {
            ...state,
            sortBy: 'date',
        };
    case 'START_DATE':
        return {
            ...state,
            startDate: action.startDate,
        };
    case 'END_DATE':
        return {
            ...state,
            endDate: action.endDate,
        };
    default:
        return state;
    }
};

export default filtersReducers;
