import React from 'react';
import { shallow } from 'enzyme';

import ViewHistorySection from '../../../assets/js/component/ViewHistorySection';

function setup() {
  const props = {
    devices: [{
      serialNumber: "0001D",
      checked: false
    }],
    getDevices: jest.fn()
  };

  const enzymeWrapper = shallow(
    <ViewHistorySection {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ViewHistorySection component (js/component/ViewHistorySection)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    // TODO: finish unit testing
  });
});
