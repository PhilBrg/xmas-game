import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <Presentation />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
