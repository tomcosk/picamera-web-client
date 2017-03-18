import {websocket} from '../helpers/socket';

const sendObj = (value, id, uuid) => ({
  type: 'SET_VALUE',
  value,
  id,
  uuid
});

const createUuid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

export function setValue(id, value) {
  return (dispatch) => {

    const dataToSend = sendObj(value, id, createUuid());
    websocket.sendMessage(dataToSend);


    dispatch(sendObj(value, id));
  };
}

export function connect(value) {
  return {
    type: 'CONNECT',
    value
  }
}