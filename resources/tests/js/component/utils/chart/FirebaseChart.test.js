import React from 'react';
import { shallow } from 'enzyme';

import FirebaseChart from '../../../../../assets/js/component/utils/chart/FirebaseChart';

function setup() {
  const props = {
    url: 'a',
    label: 'b',
    chartType: 'c',
    xAxisTitle: 'd',
    yAxisTitle: 'e',
    chartTitle: 'f'
  };

  const enzymeWrapper = shallow(
    <FirebaseChart {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
}

describe('FirebaseChart component (js/component/FirebaseChart)', () => {
  it ('should render self and subcomponents', () => {
    const { props, enzymeWrapper } = setup();

    expect(enzymeWrapper.instance().props.url).toBe(props.url);
    expect(enzymeWrapper.instance().props.label).toBe(props.label);
    expect(enzymeWrapper.instance().props.chartType).toBe(props.chartType);
    expect(enzymeWrapper.instance().props.xAxisTitle).toBe(props.xAxisTitle);
    expect(enzymeWrapper.instance().props.yAxisTitle).toBe(props.yAxisTitle);
    expect(enzymeWrapper.instance().props.chartTitle).toBe(props.chartTitle);

    expect(enzymeWrapper.find('ChartjsWrapper').length).toBe(1);
  });
});
