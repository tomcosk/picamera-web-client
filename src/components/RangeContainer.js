import {connect} from 'react-redux';
import Range from './Range'
import {setValue} from '../actions' // poznamka bez {} berie default

const mapStateToProps = (state, ownProps) => {
  return {
    connected: state.settingsReducer.connected
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange (value) {
        dispatch(setValue(ownProps.type, value));
    }
});

const RangeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Range);

export default RangeContainer;