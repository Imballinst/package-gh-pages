import React from 'react';
import { shallow } from 'enzyme';

import ViewDevicesSection from '../../../assets/js/component/ViewDevicesSection';

function setup() {
  const props = {
    devices: [{
      serialNumber: "0001D",
      checked: false
    }],
    getDevices: jest.fn()
  };

  const enzymeWrapper = shallow(
    <ViewDevicesSection {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ViewDevicesSection component (js/component/ViewDevicesSection)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.devices).toBe(props.devices);
    expect(enzymeWrapper.instance().props.getDevices).toBe(props.getDevices);

    expect(enzymeWrapper.find('div').hasClass('view-devices-section')).toBe(true);
  });
});
