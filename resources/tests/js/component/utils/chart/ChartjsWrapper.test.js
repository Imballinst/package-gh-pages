import React from 'react';
import { shallow } from 'enzyme';

import ChartjsWrapper from '../../../../../assets/js/component/utils/chart/ChartjsWrapper';

function setup() {
  const props = {
    height: "400",
    width: "600",
    type: 'line',
    data: {},
    options: {}
  };

  const enzymeWrapper = shallow(
    <ChartjsWrapper {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('ChartjsWrapper component (js/component/ChartjsWrapper)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.height).toBe(props.height);
    expect(enzymeWrapper.instance().props.width).toBe(props.width);

    expect(enzymeWrapper.find('canvas').length).toBe(1);
  });
});
