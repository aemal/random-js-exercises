import React, { Component } from 'react';
import { PdfLoader } from 'react-pdf-annotator';



const withPdf = (WrappedComponent, Url, beforeLoad) => {
  return class extends Component {
    render() {
      return (
          <PdfLoader url={Url} beforeLoad={beforeLoad}>
            {pdfDocument => (
            <WrappedComponent
              {...this.props}
              pdfDocument={pdfDocument} />
            )}
          </PdfLoader>
      );
    }
  }
}

export default withPdf
