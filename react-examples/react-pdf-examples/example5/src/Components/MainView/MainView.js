import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
// import Fuck  from 'pdfjs-dist/build/pdf.min';

import {TextLayerBuilder} from 'pdfjs-dist/web/pdf_viewer.js'

export  class MainView extends Component {
  constructor(){
    super()
    this.mainCanvas = React.createRef()
    this.textDiv = React.createRef()
  }

  componentDidMount(){
    let { currentPage } = this.props
    this.props.pdfDocument.getPage(currentPage).then(page => {
        let scale = this.props.scale
        let viewport = page.getViewport(scale);
        //We'll create a canvas for each page to draw it on
        let canvas = this.mainCanvas.current
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // Text Layer

        //Draw it on the canvas
        let renderContext = {
                    canvasContext: context,
                    viewport: viewport
                  };
        //Rendering Text Layer
        page.render(renderContext)
          .then(() => {
            // Get text-fragments
            return page.getTextContent();
          })
          .then(textContent => {
            // Create div which will hold text-fragments
            var textLayerDiv = this.textDiv.current

            // Create new instance of TextLayerBuilder class
            let textLayer = new TextLayerBuilder({
              textLayerDiv: textLayerDiv,
              pageIndex: page.pageIndex,
              viewport: viewport
            });

            // Set text-fragments
            textLayer.setTextContent(textContent);

            // Render text-fragments
            textLayer.render();
          });
    })
  }

  clearChildNodes(myNode){
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  }

  componentDidUpdate(){
    let { currentPage } = this.props
    let Div =  this.textDiv.current;
    this.clearChildNodes(Div)
    let mainCanvas = this.mainCanvas.current
    this.clearChildNodes(mainCanvas)

    this.props.pdfDocument.getPage(currentPage).then(page => {
        let scale = this.props.scale
        let viewport = page.getViewport(scale);
        //We'll create a canvas for each page to draw it on
        let canvas = this.mainCanvas.current
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // Text Layer

        //Draw it on the canvas
        let renderContext = {
                    canvasContext: context,
                    viewport: viewport
                  };
        //Rendering Text Layer
        page.render(renderContext)
          .then(() => {
            // Get text-fragments
            return page.getTextContent();
          })
          .then(textContent => {
            // Create div which will hold text-fragments
            var textLayerDiv = this.textDiv.current

            // Create new instance of TextLayerBuilder class
            let textLayer = new TextLayerBuilder({
              textLayerDiv: textLayerDiv,
              pageIndex: page.pageIndex,
              viewport: viewport
            });

            // Set text-fragments
            textLayer.setTextContent(textContent);

            // Render text-fragments
            textLayer.render();
          });
    })
  }
  render() {
    return (
      <Fragment>
      <div style={{position: 'absolute'}} >
        <canvas ref={this.mainCanvas}></canvas>
        <div className="textLayer" ref={this.textDiv}></div>
      </div>
    </Fragment>
    );
  }
}

MainView.propTypes = {
  currentPage: PropTypes.number.isRequired
}
