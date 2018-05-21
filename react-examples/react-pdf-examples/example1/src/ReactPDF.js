import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import file from './sample.pdf';

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <button onClick={() => this.setState({ pageNumber: 2})}>Next Page</button>
      </div>
    );
  }
}

export default App;
