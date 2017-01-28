import React from 'react';
import { shallow } from 'enzyme';

import SidebarElement from '../../../assets/js/component/SidebarElement';

function setup() {
  const props = {
    active: 'active',
    routeLink: '/',
    onChangeSection: jest.fn(),
    icon: '',
    text: 'test text'
  };

  const enzymeWrapper = shallow(
    <SidebarElement {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('SidebarElement component (js/component/SidebarElement)', () => {
  it ('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('li').hasClass('active')).toBe(true);
    expect(enzymeWrapper.find('span').hasClass('sidebar-list-text')).toBe(true);
    expect(enzymeWrapper.find('span').text()).toBe('test text');
  });
});
