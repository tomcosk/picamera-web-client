import {connect} from 'react-redux';
import Checkbox from './Checkbox'
import {setValue} from '../actions' // poznamka bez {} berie default

const mapStateToProps = (state, ownProps) => {
  return {
    connected: state.settingsReducer.connected
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange (value) {
        let valueToSend = value === 'True' ? 'True' : 'False';
        dispatch(setValue(ownProps.type, valueToSend));
    }
});

const CheckboxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox);

export default CheckboxContainer;