import * as React from 'react';
import './App.css';

class App extends React.Component {
  public onBtnClick =() => {
    alert('Hello');
  }
  public render() {
    return (
      <div className="App">
        Hello Anvesh 
        <button onClick={this.onBtnClick}>Click me</button>
      </div>
    );
  }
}

export default App;
