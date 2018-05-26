import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class RenderCanvas extends Component {
    constructor(props){
      super(props)
    props.pages.map((page, index) => this['page'+index] = React.createRef());
  }
    componentDidMount() {
      this.props.pages.map((page, index) => this.loadPage(index, this['page'+index]));
    }

      loadPage(pageNumber, canvasRef) {
        let page = this.props.pages[pageNumber]
        let scale = this.props.scale
          var viewport = page.getViewport(scale);
          let canvas = canvasRef.current;
          let context = canvas.getContext('2d')
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          page.render({canvasContext: context, viewport: viewport})
      }


        makeCanvase(pageNumber) {
          let { handleClicked } = this.props
            return (
              <canvas
                onClick={handleClicked !== undefined ? handleClicked.bind(this, pageNumber+1) : null}
                key={pageNumber}
                ref={this['page'+pageNumber]}>
              </canvas>
            );
        }
  render(){
    const { children, pages } = this.props
    let canvases = pages.map((page, index) => this.makeCanvase(index))
    return(
      children(canvases)
    )
  }
}


RenderCanvas.propTypes = {
  pages: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  handleClicked: PropTypes.func,
  scale: PropTypes.number.isRequired
}
