import React from 'react';
import { shallow } from 'enzyme';

import { MultiselectRaw } from '../../../../../assets/js/component/utils/select/Multiselect';

function setup() {
  const props = {
    options: ["0001D"],
    selectedOptions: ["0001D"],
    checkAll: false,
    onToggleAllCheckboxes: jest.fn(),
    onToggleSingleCheckbox: jest.fn(),
    onHideGraph: jest.fn()
  };

  const enzymeWrapper = shallow(
    <MultiselectRaw {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('MultiselectRaw component (js/component/MultiselectRaw)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.options).toBe(props.options);
    expect(enzymeWrapper.instance().props.selectedOptions).toBe(props.selectedOptions);
    expect(enzymeWrapper.instance().props.checkAll).toBe(props.checkAll);
    expect(enzymeWrapper.instance().props.onToggleAllCheckboxes).toBe(props.onToggleAllCheckboxes);
    expect(enzymeWrapper.instance().props.onToggleSingleCheckbox).toBe(props.onToggleSingleCheckbox);
    expect(enzymeWrapper.instance().props.onHideGraph).toBe(props.onHideGraph);

    expect(enzymeWrapper.find('Button').length).toBe(1);
    expect(enzymeWrapper.find('Panel').length).toBe(1);
    expect(enzymeWrapper.find('SelectFilter').length).toBe(1);
  });
});
