import React, {Component} from 'react'
import css from './Status.css';
import {websocket, connect} from '../helpers/socket'

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.connected) {
      websocket.close();
    } else {
      connect(websocket.store);
    }
    console.log(websocket);
  }


  render() {
    let statusClassName;
    let label;
    let connectClass;
    if (this.props.connected) {
      statusClassName = "status connected";
      label = "Connected";
      connectClass = "fa fa-power-off red";
    } else {
      statusClassName = "status disconnected";
      label = "Disconnected";
      connectClass = "fa fa-power-off green";
    }
    return (
      <div className="wrapper">
        <div className="statusWrap">
          <div className={statusClassName}>
            {label}
          </div>
        </div>
        <div className="connectButtonWrap">
          <div className="connectButton" onClick={this.onClick}><i className={connectClass} aria-hidden="true"></i></div>
        </div>
      </div>

    );
  }
}

export default Status