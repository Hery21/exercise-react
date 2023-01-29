import React from 'react';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>UserName</p>
      </header>
      <div className="sidebar">
        <ul className="sidebarList">
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/categories">
              Categories
            </a>
          </li>
        </ul>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
