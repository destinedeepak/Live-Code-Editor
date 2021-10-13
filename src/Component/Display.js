import React, { Component } from 'react';

export default class Display extends Component {
  state = {
    doc: '',
  };
  componentDidMount() {
    this.displayPreview();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.html !== this.props.html ||
      prevProps.css !== this.props.css
    ) {
      this.displayPreview();
    }
  }

  displayPreview() {
    let { html, css } = this.props;
    this.setState({
      doc: `<html>
    <body>${html}<body>
    <style>${css}<style>
  <html>`,
    });
  }
  render() {
    let { label } = this.props;
    return (
      <section className="w-2/4 ml-4 h-96 h-81vh">
        <div className="bg-gray-300 rounded-t flex justify-between px-2 text-gray-500">
          <div>
            <span className="inline-block rounded-full bg-red-400 w-2 h-2 ml-1"></span>
            <span className="inline-block rounded-full bg-yellow-400 w-2 h-2 ml-1"></span>
            <span className="inline-block rounded-full bg-green-400 w-2 h-2 ml-1"></span>
          </div>
          <h4>{label}</h4>
        </div>
        <iframe
          className="border bg-white"
          title="preview"
          srcDoc={this.state.doc}
          width="100%"
          height="100%"
        ></iframe>
      </section>
    );
  }
}
