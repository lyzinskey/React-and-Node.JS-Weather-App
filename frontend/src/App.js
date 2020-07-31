import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from "./components/Logo/Logo";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <h1>
            <img width={100} height={100} src={logo} className="App-logo" alt="logo"/>
            React Weather App
          </h1>
        </header>

        <main>
          <Forecast/>
        </main>

        <footer> This page is created by Yanzhi Liu (yanzhliu) </footer>
      </div>
  );
}

export default App;
