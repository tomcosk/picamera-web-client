import {connect as connectAction} from '../actions'
//const wsUri = "ws://echo.websocket.org/";
const wsUri = "ws://192.168.3.111:9000";
export let websocket;


const onMessage = (e) => {
  let json = JSON.parse(e.data);
  if (websocket.messagePool[json.uuid] !== undefined && json.type === 'OK') {
    delete websocket.messagePool[json.uuid];
  }
};

const sendMessage = (msg) => {
//  websocket.messagePool[msg.uuid] = msg;
  websocket.send(JSON.stringify(msg));
};

const onOpen = () => {
  console.log('open');
  websocket.store.dispatch(connectAction(true));
};

const onClose = () => {
  console.log('closed');
  websocket.store.dispatch(connectAction(false));
};

export function connect(store) {
  websocket = new WebSocket(wsUri);
  websocket.onmessage = onMessage;
  websocket.store = store;
  websocket.sendMessage = sendMessage;
  websocket.messagePool = [];
  websocket.onopen = onOpen;
  websocket.onclose = onClose;
};
