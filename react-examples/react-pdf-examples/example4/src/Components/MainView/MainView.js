import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'


export  class MainView extends Component {
  constructor(){
    super()
    this.mainCanvas = React.createRef()
  }

  componentDidMount(){
    let viewport = this.props.currentPage.getViewport(1);
    //We'll create a canvas for each page to draw it on
    let canvas = this.mainCanvas.current
    let context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //Draw it on the canvas
    this.props.currentPage.render({canvasContext: context, viewport: viewport})
    // this.mainCanvas.current.appendChild(canvas)
  }


  componentDidUpdate(){
      let viewport = this.props.currentPage.getViewport(1);
      console.log(this.props.currentPage)
      //We'll create a canvas for each page to draw it on
      let canvas = this.mainCanvas.current
      let context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //Draw it on the canvas
      this.props.currentPage.render({canvasContext: context, viewport: viewport})
      // this.mainCanvas.current.appendChild(canvas)
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
  currentPage: PropTypes.object.isRequired
}
