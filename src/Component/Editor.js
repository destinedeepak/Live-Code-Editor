import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';

export default class Editor extends Component {
  render() {
    let { value, label, language } = this.props;
    return (
      <section className="mb-4">
        <div className="bg-gray-300 rounded-t flex justify-between px-2 text-gray-500">
          <div>
            <span className="inline-block rounded-full bg-red-400 w-2 h-2 ml-1"></span>
            <span className="inline-block rounded-full bg-yellow-400 w-2 h-2 ml-1"></span>
            <span className="inline-block rounded-full bg-green-400 w-2 h-2 ml-1"></span>
          </div>
          <h4>{label}</h4>
        </div>
        <CodeMirror
          className="rounded-b"
          value={value}
          options={{
            mode: language,
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            this.props.handleChange(editor, data, value, label);
          }}
        />
      </section>
    );
  }
}
