import {Component} from 'react';
import React from 'react';

class Control extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let input = null;
        console.log(this.props.options);
        if (this.props.type === 'selectBox') {
            if (Array.isArray(this.props.options.items)) {
                let list = this.props.options.items.map((item) => <option key={item} name={item}>{item}</option>)

                input =
                    <select name="control">
                        {list}
                    </select>
            }
        } else if (this.props.type === 'checkBox') {
            input = <input type="checkbox" value="True"/>
        }
        else if (this.props.type === 'integer') {
            let min = 0;
            let max = 100;
            let step = 1;
            console.log(this.props.options);
            ('min' in this.props.options) ? min = this.props.options.min : min = 0;
            ('max' in this.props.options) ? max = this.props.options.max : max = 100;
            ('step' in this.props.options) ? step = this.props.options.step : step = 1;
            input = <input type="range" min={min} max={max} step={step} />
        } else {
            input = <input type="text"/>;
        }

        let style = {
            width: '200px',
            display: 'inline-block',
            textAlign: 'left'
        }
        return (
            <div className="control">
                <span style={style}>{this.props.id}:</span><span style={style}> {input}</span>
                <span style={style}>
                    <button>Set</button>
                </span>
            </div>
        )
    }
}
export default Control;
