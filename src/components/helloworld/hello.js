import React from 'react';

import './hello.css'

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello'
    };

    this._removeGreeting = this._removeGreeting.bind(this);
  }

  render() {
    return (
      <div className="hello">{this.state.greeting} {this.props.name}!
        {/* <button onClick={this._frenchify}>Frencify!</button> */}
        <button onClick={this._removeGreeting}>Remove Me!</button>
      </div>
    );
  }

  _removeGreeting(event) {
    event.preventDefault();
    this.props.removeGreeting(this.props.name);
  }
}
