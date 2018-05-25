import "pdfjs-dist/web/pdf_viewer"

import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import Thumbnails from '../Components/Thumbnails'
import { PDFJS } from "pdfjs-dist";

import "pdfjs-dist/web/pdf_viewer.css";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      pdfDoc: null,
      pages: [],
      totalPages: null,
      currentPage: null
    }
  }


   componentDidMount() {
     const pdfDoc = this.props.pdfDocument
     let totalPages = pdfDoc.numPages
     let pages = [];

     if (pdfDoc) {
       for (let i = 1; i < totalPages + 1; i++){
         pdfDoc.getPage(i)
         .then(page => {
                pages.push(page)
                  return pages
                    })
                  }
       return (
         this.setState({
           pdfDoc,
           totalPages: pdfDoc.numPages,
           pages,
         })
       )
     }
  }
//
//  handleClick = () => {
//   this.state.pages.map(page => {
//         // // Prepare canvas using PDF page dimensions
//         // const canvas = ReactDOM.findDOMNode(this.refs["canvas"]);
//         // if (!canvas) return;
//         // const width = canvas.clientWidth;
//         // var viewport = page.getViewport(0.2);
//         //     canvas.height = viewport.height;
//         //     canvas.width = viewport.width;
//         //
//
//      // return page.render({
//      //         canvasContext: canvas.getContext('2d'),
//      //         viewport: viewport
//      //       });
//
//
//
//      // Set scale (zoom) level
//    var scale = 1.5;
//
//    // Get viewport (dimensions)
//    var viewport = page.getViewport(scale);
//
//    // Get canvas#the-canvas
//    var canvas =  document.createElement('canvas');
//    canvas.setAttribute("id", "canvas");
//
//    // Fetch canvas' 2d context
//    var context = canvas.getContext('2d');
//
//    // Set dimensions to Canvas
//    canvas.height = viewport.height;
//    canvas.width = viewport.width;
//
//    // Prepare object needed by render method
//    var renderContext = {
//      canvasContext: context,
//      viewport: viewport
//    };
// page.render(renderContext);
//   })
// }

  render() {
    const { pages, totalPages } = this.state
    return (
      <Fragment>
      <div>MyComponent</div>
      <button onClick={this.handleClick}>PressMe</button>
      <Thumbnails pages={pages} />
      </Fragment>
    );
  }
}
