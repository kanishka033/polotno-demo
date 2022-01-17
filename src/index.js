import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'polotno/model/store';

const store = createStore({
  key: 'Jq19lz43FJSa7QAkVGmM',
  showCredit: true
});

const page = store.addPage();

page.addElement({
  x: 500,
  y: 500,
  type: 'text',
  fill: 'black',
  text: 'hello',
  fontSize: 40,
  align: 'center'
});

ReactDOM.render(
    <App store={store} />,
  document.getElementById('root')
);


