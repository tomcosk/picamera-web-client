import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import cameraApp from './reducers/index';
import thunk from 'redux-thunk';
import {connect} from './helpers/socket';


import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(cameraApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

connect(store);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
