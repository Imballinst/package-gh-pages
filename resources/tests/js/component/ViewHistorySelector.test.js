import React from 'react';
import { shallow } from 'enzyme';

import ViewHistorySelector from '../../../assets/js/component/ViewHistorySelector';

function setup() {
  const props = {
    deviceSerialNumbers: ['0001D'],
    selectedSerialNumber: '0001D',
    onToggleRadio: jest.fn(),
    onShow: jest.fn(),
    onHide: jest.fn()
  };

  const enzymeWrapper = shallow(
    <ViewHistorySelector {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ViewHistorySelector component (js/component/ViewHistorySelector)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.find('Panel').hasClass('panel-selector')).toBe(true);
    expect(enzymeWrapper.find('Row').length).toBe(5);
    expect(enzymeWrapper.find('Col').length).toBe(9);

    expect(enzymeWrapper.instance().props.deviceSerialNumbers).toBe(props.deviceSerialNumbers);
    expect(enzymeWrapper.instance().props.selectedSerialNumber).toBe(props.selectedSerialNumber);
    expect(enzymeWrapper.instance().props.onToggleRadio).toBe(props.onToggleRadio);
    expect(enzymeWrapper.instance().props.onShow).toBe(props.onShow);
    expect(enzymeWrapper.instance().props.onHide).toBe(props.onHide);
  });
});
