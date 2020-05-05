import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Clock from 'react-clock';
import Digital from './Digital';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      date: new Date()
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
    <div>
        <p>Current time:</p>
        <Clock
          value={this.state.date}
        />

        <Digital />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
