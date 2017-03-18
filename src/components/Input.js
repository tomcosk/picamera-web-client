import React, {Component} from 'react'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    if (this.state.value !== '') {
      this.props.onClick(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    const {type} = this.props;
    return (
      <div className="control">
        <label htmlFor={type}>
          {type}:
        </label>
        <input id={type} type="text" value={this.state.value} onChange={this.handleChange} />
        <div className="button" onClick={this.handleClick}>SET</div>
      </div>
    );
  }
}

export default Input