import React from 'react';
import { shallow } from 'enzyme';

import FieldGroup from '../../../../../assets/js/component/utils/form/FieldGroup';

function setup() {
  const props = {
    id: "formRegisterDeviceID",
    type: "text",
    label: "Device ID",
    placeholder: "Enter text"
  };

  const enzymeWrapper = shallow(
    <FieldGroup {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('FieldGroup component (js/component/FieldGroup)', () => {
  it ('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.instance().props.id).toBe(props.id);
    expect(enzymeWrapper.instance().props.type).toBe(props.type);
    expect(enzymeWrapper.instance().props.label).toBe(props.label);
    expect(enzymeWrapper.instance().props.placeholder).toBe(props.placeholder);

    expect(enzymeWrapper.find('FormGroup').props().controlId).toEqual(props.id);
    expect(enzymeWrapper.find('FormGroup').length).toBe(1);
    expect(enzymeWrapper.find('FormControl').length).toBe(1);
    expect(enzymeWrapper.find('ControlLabel').props().children).toBe(props.label);
    expect(enzymeWrapper.find('HelpBlock').length).toBe(0);
  });
});
