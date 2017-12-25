import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import NoMatch from '../../js/NoMatch';

test('should render NoMatch component', () => {
    const wrapper = shallow(<NoMatch />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
