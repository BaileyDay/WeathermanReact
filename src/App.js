import React from 'react';
import './App.css';
import WeatherData from './components/weatherData'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand" href="/">WeatherMan</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/BaileyDay/WeathermanReact" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="logodiv">
        <img className="logo" src={require('./images/logo.png')} alt="Logo" />
      </div>
      <div>
        <WeatherData />
      </div>
    </div>
  );
}



export default App;
