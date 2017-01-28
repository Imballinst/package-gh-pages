import expect from 'expect';
import axios from 'axios';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import * as Actions from '../../../assets/js/redux/Actions';
import * as ActionTypes from '../../../assets/js/constants/ActionTypes';

// Synchronous action creators
describe('Censor Dashboard Synchronous Action Creators Unit Tests (js/redux/Actions)', () => {
  it('should call the change section action', () => {
    const expectedAction = {
      type: ActionTypes.CHANGE_SECTION,
      nextSectionID: 'test-section'
    };

    expect(Actions.changeSection('test-section')).toEqual(expectedAction);
  });

  it('should call the sidebar toggle action', () => {
    const expectedAction = {
      type: ActionTypes.TOGGLE_SIDEBAR
    };

    expect(Actions.toggleSidebar()).toEqual(expectedAction);
  });

  it('should get device data from URL', () => {
    const expectedAction = {
      type: ActionTypes.GET_DEVICES,
      data: { test: 'test' }
    };

    expect(Actions.getDevices({ test: 'test' })).toEqual(expectedAction);
  });
});

// Asynchronous action creators
describe('Censor Dashboard Asynchronous Action Creators Unit Tests (js/redux/Actions)', () => {
  const mockStore = configureStore([promiseMiddleware]);
  const mock = new MockAdapter(axios);
  const store = mockStore({});

  it('stub response for any matching request URL', function () {
    const expectedData = {
      "success":true,
      "ct": [
        {
          "updatedAt": "2017-01-17T03:17:12.747Z",
          "deviceID": "FAB10",
          "feederID": "0001D",
          "_id": "587c42633c1a245d02353564"
        }
      ]
    }

    mock.onGet('http://fetchbroker.efishery.com/device').reply(200, expectedData);

    return store.dispatch(Actions.axiosRequest('http://fetchbroker.efishery.com/device', 'GET', {}, Actions.getDevices))
      .then(() => {
        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0].type).toBe(ActionTypes.GET_DEVICES);
        expect(store.getActions()[0].data).toBe(expectedData.ct);
    });
  });
});
