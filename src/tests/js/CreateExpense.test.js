import React from "";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { CreateExpense } from "../../js/CreateExpense";

test("should render add expense page correctly", () => {
    const onSubmitSpy = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<CreateExpense onSubmit={onSubmitSpy} history={history} />);
    expect(wrapper).toMatchSnapshot();;
});