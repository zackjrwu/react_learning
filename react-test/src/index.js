//  import React 組件
import React from 'react';
//  import ReactDOM 組件
import ReactDOM from 'react-dom';
//  import 當下目錄的 css file
import './index.css';
//  import 當下的 App component
import App from './App';
//  ??
import * as serviceWorker from './serviceWorker';
//  使用 ReactDOM.render(欲繪製的組件, 想繪製在哪個 tag 裡面) 來繪製組件
ReactDOM.render(<App />, document.getElementById('rootgg'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();