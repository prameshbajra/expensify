import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Header from "../../js/Header";

// toJSON use garrdai garrnu parrxa .. remember because jest.config.json file banako xaina maile ..
// 119 enzyme ...
test("should render header ", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Header");
    expect(toJson(wrapper)).toMatchSnapshot();
});














