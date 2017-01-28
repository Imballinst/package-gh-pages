import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../../../assets/js/component/Sidebar';

function setup() {
  const props = {};

  const enzymeWrapper = shallow(
    <Sidebar {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('Sidebar component (js/component/Sidebar)', () => {
  it ('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('ul').hasClass('sidebar-list')).toBe(true);
  });
});
