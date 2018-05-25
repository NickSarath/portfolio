import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((<BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Main />
                  </BrowserRouter>
)               ,document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}