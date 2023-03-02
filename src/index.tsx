import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    const server = await (await import(/* webpackChunkName: 'server' */ 'server')).default
    server()
  }
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
})()



