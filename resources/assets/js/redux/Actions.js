import axios from 'axios';

import * as ActionTypes from '../constants/ActionTypes';

// Helper functions
function httpRequest(url, method, dataParams) {
  let axiosConfig = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method === 'GET') {
    axiosConfig['params'] = dataParams;
  } else if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    axiosConfig['data'] = dataParams;
  }

  return axios(url, axiosConfig);
}

// Action creators
function changeSection(sectionID) {
  return {
    type: ActionTypes.CHANGE_SECTION,
    nextSectionID: sectionID
  };
}

function toggleSidebar() {
  return {
    type: ActionTypes.TOGGLE_SIDEBAR
  };
}

function getDevices(data) {
  return {
    type: ActionTypes.GET_DEVICES,
    data: data
  };
}

function addDevice(data) {
  return {
    type: ActionTypes.ADD_DEVICE,
    data: data
  };
}

function getDeviceData(data) {
  return {
    type: ActionTypes.GET_DEVICE_DATA,
    data: data
  };
}

// Axios request
function axiosRequest(url, method, dataParams, callback) {
  return (dispatch) => {
    return httpRequest(url, method, dataParams)
      .then((response) => {
        const data = response.data;

        if (data.success) {
          dispatch(callback(data.ct));
        } else {
          throw Error;
        }
      })
      .catch(
        (e) => e
      );
  };
}


export { changeSection, toggleSidebar, getDevices, addDevice, getDeviceData, axiosRequest };
