import React from 'react';
import { shallow } from 'enzyme';

import ViewLiveSelector from '../../../assets/js/component/ViewLiveSelector';

function setup() {
  const props = {
    devices: ["0001D"],
    selectedIDs: ["0001D"],
    onToggleAllCheckboxes: jest.fn(),
    onToggleSingleCheckbox: jest.fn(),
    onShow: jest.fn(),
    onHide: jest.fn()
  };

  const enzymeWrapper = shallow(
    <ViewLiveSelector {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ViewLiveSelector component (js/component/ViewLiveSelector)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.find('Panel').hasClass('panel-selector')).toBe(true);
    expect(enzymeWrapper.find('Row').length).toBe(2);
    expect(enzymeWrapper.find('Col').length).toBe(3);

    expect(enzymeWrapper.instance().props.devices).toBe(props.devices);
    expect(enzymeWrapper.instance().props.selectedIDs).toBe(props.selectedIDs);
    expect(enzymeWrapper.instance().props.onToggleAllCheckboxes).toBe(props.onToggleAllCheckboxes);
    expect(enzymeWrapper.instance().props.onToggleSingleCheckbox).toBe(props.onToggleSingleCheckbox);
    expect(enzymeWrapper.instance().props.onShow).toBe(props.onShow);
    expect(enzymeWrapper.instance().props.onHide).toBe(props.onHide);
  });
});
