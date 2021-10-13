import React, { Component } from 'react';
import Display from './Display';
import Editor from './Editor';
import Header from './Header';

export default class App extends Component {
  state = {
    html: '<center>\n <img src="https://cutt.ly/JbMvJKT" /> \n <h1>Hello World!</h1> \n</center>',
    css: "h1 { \n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: 300px;\n  border-radius: 20px;\n  object-fit: cover \n}",
  };

  handleChange = (editor, data, value, label) => {
    this.setState({ [label.toLowerCase()]: value });
  };
  render() {
    let { html, css} = this.state;
    return (
      <div className="px-40">
        <Header />
        <div className="flex justify-between">
          <div className="w-2/4">
            <Editor
              handleChange={this.handleChange}
              label="HTML"
              language="xml"
              value={html}
            />
            <Editor handleChange={this.handleChange} label="CSS" value={css} language="css" />
          </div>
          <Display label="OUTPUT" html={html} css={css} />
        </div>
      </div>
    );
  }
}
