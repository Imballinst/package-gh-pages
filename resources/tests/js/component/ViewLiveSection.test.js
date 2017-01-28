import React from 'react';
import { shallow } from 'enzyme';

import ViewLiveSection from '../../../assets/js/component/ViewLiveSection';

function setup() {
  const props = {
    devices: [{
      serialNumber: "0001D",
      checked: false
    }],
    getDevices: jest.fn()
  };

  const enzymeWrapper = shallow(
    <ViewLiveSection {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ViewLiveSection component (js/component/ViewLiveSection)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.devices).toBe(props.devices);
    expect(enzymeWrapper.instance().props.getDevices).toBe(props.getDevices);

    expect(enzymeWrapper.find('div').hasClass('view-live-section')).toBe(true);
  });
});
