import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { ExpenseListFilters } from "../../js/ExpenseListFilters";

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const altFilters = {
    text: 'SOme gibberish texty mexty',
    sortBy: 'amount',
    startDate: 1500129297,
    endDate: 169894587
};

let sortByAmountSpy, sortByDateSpy, setTextFilterSpy, wrapper;

beforeEach(() => {
    sortByAmountSpy = jest.fn();
    sortByDateSpy = jest.fn();
    setTextFilterSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setTextFilter={setTextFilterSpy}
        />
    );
});

test("should render ExpenseListFilters properly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render ExpenseListFilters properly in presence of a alt filter", () => {
    wrapper.setProps({ filters: altFilters });
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should work onChange handler for input properly", () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: "Some filters text"
        }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith("Some filters text");
});

test("should work on options - date ", () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: "date"
        }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test("should work on options - amount ", () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: "amount"
        }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});