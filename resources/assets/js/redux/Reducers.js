import { LOCATION_CHANGE } from 'react-router-redux';

import * as ActionTypes from '../constants/ActionTypes';

// Separated from state because it's not going to be passed to components
let firstTimeLoad = true;

// Global UI state
const defaultGlobalUIState = {
  activeSectionID: 'view-devices',
  sidebarToggled: false
};

function changeGlobalUIState(state = defaultGlobalUIState, action) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      // respond to first time load
      if (firstTimeLoad) {
        firstTimeLoad = false;
        let nextSectionID = 'view-devices';

        if (action.payload.pathname.substr(1) !== '') {
          nextSectionID = action.payload.pathname.substr(1);
        }

        return Object.assign({}, state, {
          activeSectionID: nextSectionID
        });
      } else {
        return state;
      }
    }
    case ActionTypes.CHANGE_SECTION: {
      if (state.activeSectionID !== action.nextSectionID) {
        return Object.assign({}, state, {
          activeSectionID: action.nextSectionID
        });
      } else {
        return state;
      }
    }
    case ActionTypes.TOGGLE_SIDEBAR: {
      return Object.assign({}, state, {
        sidebarToggled: !state.sidebarToggled
      });
    }
    default: {
      return state;
    }
  }
}

// Data
const defaultGlobalDataState = {
  devices: [],
  devicesData: []
};

function changeGlobalDataState(state = defaultGlobalDataState, action) {
  switch (action.type) {
    case ActionTypes.GET_DEVICES: {
      return Object.assign({}, state, {
        devices: action.data
      });
    }
    case ActionTypes.ADD_DEVICE: {
      const newDevicesArray = state.devices.concat(action.data);

      return Object.assign({}, state, {
        devices: newDevicesArray
      });
    }
    case ActionTypes.GET_DEVICE_DATA: {
      return Object.assign({}, state, {
        devicesData: action.data
      });
    }
    default: {
      return state;
    }
  }
}

export { changeGlobalUIState, changeGlobalDataState };
