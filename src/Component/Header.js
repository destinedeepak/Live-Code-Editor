import React, { Component } from 'react';

export default class Header extends Component {
  
  render() {
    return (
      <header className="text-center p-2">
        <h1 className="text-3xl font-medium">Code Editor</h1>
        <h2 className="text-sm m-4">You can write and preview HTML and CSS!</h2>
      </header>
    );
  }
}
