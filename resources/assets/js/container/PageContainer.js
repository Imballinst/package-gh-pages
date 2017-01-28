import { connect } from 'react-redux';
import * as Actions from '../redux/Actions';
import Page from '../component/Page';

const mapStateToProps = (state) => {
  return {
    activeSectionID: state.changeGlobalUIState.activeSectionID,
    sidebarToggled: state.changeGlobalUIState.sidebarToggled,
    devices: state.changeGlobalDataState.devices,
    devicesData: state.changeGlobalDataState.devicesData
  };
};

const mapDispatchToProps = (dispatch) => {
  const baseDeviceEndpoint = 'http://fetchbroker.efishery.com/device';

  return {
    getDevices: () => {
      dispatch(Actions.axiosRequest(baseDeviceEndpoint, 'GET', {}, Actions.getDevices));
    },
    addUpdateDevice: (data) => {
      dispatch(Actions.axiosRequest(baseDeviceEndpoint, 'POST', data, Actions.addDevice));
    },
    getDeviceData: (deviceID, timeParams) => {
      const newEndpoint = baseDeviceEndpoint + '/' + deviceID;

      dispatch(Actions.axiosRequest(newEndpoint, 'GET', timeParams, Actions.getDeviceData));
    },
    downloadDeviceData: (deviceID, timeParams, type) => {
      const newEndpoint = baseDeviceEndpoint + '/' + deviceID + '/' + type;

      dispatch(Actions.axiosRequest(newEndpoint, 'GET', timeParams, Actions.getDeviceData));
    },
    onChangeSection: (nextSectionID) => {
      dispatch(Actions.changeSection(nextSectionID));
    },
    onToggleSidebar: () => {
      dispatch(Actions.toggleSidebar());
    }
  };
};

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default PageContainer;
