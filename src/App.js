import React from 'react';
import './App.css';
import WeatherData from './components/weatherData'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a className="navbar-brand" href="/">WeatherMan</a>
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
