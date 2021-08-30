import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null,
  };
  hanldeClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="APp-logo" alt="logo" />
          <p onClick={this.hanldeClick}>HellogReact!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
