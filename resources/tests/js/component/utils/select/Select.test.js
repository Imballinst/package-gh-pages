import React from 'react';
import { shallow } from 'enzyme';

import { SelectRaw } from '../../../../../assets/js/component/utils/select/Select';

function setup() {
  const props = {
    options: ["0001D"],
    radioName: "devicesRadio",
    selectedOptions: "0001D",
    onToggleRadio: jest.fn(),
    onHideGraph: jest.fn()
  };

  const enzymeWrapper = shallow(
    <SelectRaw {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('SelectRaw component (js/component/SelectRaw)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.options).toBe(props.options);
    expect(enzymeWrapper.instance().props.radioName).toBe(props.radioName);
    expect(enzymeWrapper.instance().props.selectedOptions).toBe(props.selectedOptions);
    expect(enzymeWrapper.instance().props.onToggleRadio).toBe(props.onToggleRadio);
    expect(enzymeWrapper.instance().props.onHideGraph).toBe(props.onHideGraph);
  });
});
