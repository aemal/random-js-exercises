import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class RenderCanvas extends Component {
    constructor(props){
      super(props)
      let totalPages =  props.pdfDocument.numPages + 1
      this.pages = []
      for (let i = 1; i < totalPages; i++){
        this.pages.push(i)
      }
    this.pages.map(page => this['page'+page] = React.createRef());
  }
    componentDidMount() {
      this.pages.map(page => this.loadPage(page, this['page'+page]));
    }

      loadPage(pageNumber, canvasRef) {
        this.props.pdfDocument.getPage(pageNumber).then(page => {
          let scale = this.props.scale
            var viewport = page.getViewport(scale);
            let canvas = canvasRef.current;
            let context = canvas.getContext('2d')
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            page.render({canvasContext: context, viewport: viewport})
        })
      }
        makeCanvase(pageNumber) {
          let { handleClicked } = this.props
            return (
              <canvas
                onClick={handleClicked.bind(this, pageNumber)}
                key={pageNumber}
                ref={this['page'+pageNumber]}>
              </canvas>
            );
        }
  render(){
    const { children } = this.props
    let canvases = this.pages.map(page => this.makeCanvase(page))
    return(
      children(canvases)
    )
  }
}


RenderCanvas.propTypes = {
  pdfDocument: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  handleClicked: PropTypes.func,
  scale: PropTypes.number.isRequired
}
