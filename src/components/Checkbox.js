import React, {Component} from 'react'

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.checked) {
      this.setState({value: 'True'});
      this.props.onChange('True');
    } else {
      this.setState({value: ''});
      this.props.onChange('False');
    }
  }
  
  render() {
    const {type, componentName} = this.props;
    return (
      <div className="control">
        <label htmlFor={type}>
          {componentName}:
        </label>
        <input disabled={this.props.connected ? '' : 'disabled'} id={type} type="checkbox" value="True" checked={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Checkbox