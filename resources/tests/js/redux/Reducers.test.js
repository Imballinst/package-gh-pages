import { LOCATION_CHANGE, routerReducer } from 'react-router-redux';
import expect from 'expect'

import rootReducer from '../../../assets/js/redux/RootReducer';
import * as Reducers from '../../../assets/js/redux/Reducers';
import * as Actions from '../../../assets/js/redux/Actions';
import * as ActionTypes from '../../../assets/js/constants/ActionTypes';

// Initial states
const defaultGlobalUIState = {
  activeSectionID: 'view-devices',
  sidebarToggled: false
};

const defaultGlobalDataState = {
  devices: [],
  devicesData: []
};

// Generic
describe('Generic initial state reducers (js/redux/Reducers)', () => {
  // Initial state
  it('should return the initial state', () => {
    expect(
      rootReducer(undefined, {})
    ).toEqual({
      changeGlobalUIState: defaultGlobalUIState,
      changeGlobalDataState: defaultGlobalDataState,
      routing: routerReducer()
    });
  });
});

// Change global UI state
describe('changeGlobalUIState reducers (js/redux/Reducers)', () => {
  // Change section state
  it('should change page section', () => {
    const oldGlobalUIState = defaultGlobalUIState;
    const newGlobalUIState = Object.assign({}, oldGlobalUIState, {
      activeSectionID: 'view-live-section'
    });

    expect(Reducers.changeGlobalUIState(oldGlobalUIState, {
      type: ActionTypes.CHANGE_SECTION,
      nextSectionID: 'view-live-section'
    })).toEqual(newGlobalUIState);
  });

  // Toggle sidebar state
  it('should toggle sidebar', () => {
    const oldGlobalUIState = defaultGlobalUIState;
    const newGlobalUIState = Object.assign({}, oldGlobalUIState, {
      sidebarToggled: true
    });

    expect(Reducers.changeGlobalUIState(oldGlobalUIState, {
      type: ActionTypes.TOGGLE_SIDEBAR,
      sidebarToggled: true
    })).toEqual(newGlobalUIState);
  });
});

// Change multiselect state
describe('changeGlobalDataState reducers (js/redux/Reducers)', () => {
  const devices = [
    {
      "updatedAt": "2017-01-17T03:17:12.747Z",
      "deviceID": "FAB10",
      "feederID": "0001D",
      "_id": "587c42633c1a245d02353564"
    }
  ];

  it('should fetch list of devices', () => {
    const oldGlobalDataState = defaultGlobalDataState;
    const newGlobalDataState = Object.assign({}, oldGlobalDataState, {
      devices: devices
    });

    expect(Reducers.changeGlobalDataState(oldGlobalDataState, {
      type: ActionTypes.GET_DEVICES,
      data: devices
    })).toEqual(newGlobalDataState);
  });
});
