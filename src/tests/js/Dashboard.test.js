import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import DashBoard from "../../js/DashBoard";

test("should reander Dashboard page", () => {
    const wrapper = shallow(<DashBoard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});