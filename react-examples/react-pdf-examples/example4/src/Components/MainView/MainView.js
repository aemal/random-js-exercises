import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'


export  class MainView extends Component {
  constructor(){
    super()
    this.mainCanvas = React.createRef()
  }

  componentDidMount(){
    let { currentPage } = this.props
    this.props.pdfDocument.getPage(currentPage).then(page => {

        let viewport = page.getViewport(1.5);
        //We'll create a canvas for each page to draw it on
        let canvas = this.mainCanvas.current
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        //Draw it on the canvas
        page.render({canvasContext: context, viewport: viewport})
        // this.mainCanvas.current.appendChild(canvas)
    })
  }


  componentDidUpdate(){
    let { currentPage } = this.props
    this.props.pdfDocument.getPage(currentPage).then(page => {

        let viewport = page.getViewport(1.5);
        //We'll create a canvas for each page to draw it on
        let canvas = this.mainCanvas.current
        let context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        //Draw it on the canvas
        page.render({canvasContext: context, viewport: viewport})
        // this.mainCanvas.current.appendChild(canvas)
    })
  }

  render() {
    return (
      <Fragment>
        <canvas ref={this.mainCanvas}></canvas>
      </Fragment>
    );
  }
}

MainView.propTypes = {
  currentPage: PropTypes.number.isRequired
}
