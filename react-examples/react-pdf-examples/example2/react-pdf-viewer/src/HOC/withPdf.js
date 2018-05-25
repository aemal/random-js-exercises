import React, { Component } from 'react';
import { PdfLoader } from 'react-pdf-annotator';



const withPdf = (WrappedComponent, Url, beforeLoad) => {
  return class extends Component {
    render() {
      return (
        <div className='hoc-container'>
          <PdfLoader url={Url} beforeLoad={beforeLoad}>
            {pdfDocument => (
            <WrappedComponent pdfDocument={pdfDocument} />
            )}
          </PdfLoader>
        </div>
      );
    }
  }
}

export default withPdf
