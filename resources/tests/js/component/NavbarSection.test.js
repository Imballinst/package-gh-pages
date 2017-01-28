import React from 'react';
import { shallow } from 'enzyme';

import NavbarSection from '../../../assets/js/component/NavbarSection';

function setup() {
  const props = {
    onToggleSidebar: jest.fn()
  };

  const enzymeWrapper = shallow(
    <NavbarSection {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('NavbarSection component (js/component/NavbarSection)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.find('img').hasClass('img-logo')).toBe(true);
    expect(enzymeWrapper.find('i').hasClass('sidebar-toggle')).toBe(true);

    expect(enzymeWrapper.instance().props.onToggleSidebar).toBe(props.onToggleSidebar);
  });
});
