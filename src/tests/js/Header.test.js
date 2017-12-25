import React from "react";
import { shallow } from "enzyme";

import Header from "../../js/Header";

test("should render header ", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Header");
    expect(wrapper).toMatchSnapshot();
});














