import React from 'react'

class Range extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: this.props.defaultValue};

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }

    handleReset() {
      this.setState({value: this.props.defaultValue});
      this.props.onChange(this.props.defaultValue)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value)
    }

    componentDidMount() {
//      this.setState({value: 30});
    }

    render() {
        const {type, min, max} = this.props;
        return (
            <div className="control">
                <label htmlFor={type}>{type}</label>
                <input disabled={this.props.connected ? '' : 'disabled'} value={this.state.value} id={type} type="range" min={min} max={max} onChange={this.handleChange} />
                <span className="value">{this.state.value}</span>
                <span className="button" onClick={this.handleReset}>Reset</span>
            </div>
        )
    }
}

export default Range