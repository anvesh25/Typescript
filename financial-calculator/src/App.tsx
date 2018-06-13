import * as React from 'react';
import './App.css';
import PurchaseCalculator from 'G://ReacJs//Typescript//financial-calculator//components//purchase-calculator//index';

import logo from './/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Financial Calculator</h1>
        </header>
        <p className="App-intro">
          purchasecalculator 
        </p>
      </div>
    );
  }
}

export default App;
