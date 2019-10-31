//  import React 組件
import React from 'react';
//  import 當下路徑的 logo 
import logo from './logo.svg';
//  inport 當下路徑的 css
import './App.css';
//  這個 component 的函式, 用來繪製出想要的網頁標籤
function App() {
  return (
    //  ClassName 是用剛才 import 的 App.css 裡面的 css style 
    <div className="App">
      <header className="App-header">
        {/* logo 是剛才 import 的 logo.svg*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//  把剛剛的 App function 做輸出
export default App;
