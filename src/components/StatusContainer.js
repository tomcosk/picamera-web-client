import {connect} from 'react-redux';
import Status from './Status'

const mapStateToProps = (state, ownProps) => {
  return {
      connected: state.settingsReducer.connected
  }
};

const StatusContainer = connect(
    mapStateToProps,
    null
)(Status);

export default StatusContainer