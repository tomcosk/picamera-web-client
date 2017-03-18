import {connect} from 'react-redux';
import Input from './Input'
import {setValue} from '../actions' // poznamka bez {} berie default

/*
const mapStateToProps = (state, ownProps) => {
};
*/

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick (value) {
        dispatch(setValue(ownProps.type, value));
    }
});

const InputContainer = connect(
    null,
    mapDispatchToProps
)(Input);

export default InputContainer;