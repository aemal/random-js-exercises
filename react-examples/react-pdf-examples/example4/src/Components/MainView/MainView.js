// import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types'
//
//
// export  class MainView extends Component {
//   constructor(){
//     super()
//     this.mainCanvas = React.createRef()
//   }
//
//   componentDidMount(){
//     let viewport = this.props.currentPage.getViewport(1);
//     //We'll create a canvas for each page to draw it on
//     let canvas = this.mainCanvas.current
//     let context = canvas.getContext('2d');
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;
//
//     //Draw it on the canvas
//     this.props.currentPage.render({canvasContext: context, viewport: viewport})
//     // this.mainCanvas.current.appendChild(canvas)
//   }
//
//
//   componentDidUpdate(){
//       let viewport = this.props.currentPage.getViewport(1);
//       console.log(this.props.currentPage)
//       //We'll create a canvas for each page to draw it on
//       let canvas = this.mainCanvas.current
//       let context = canvas.getContext('2d');
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;
//
//       //Draw it on the canvas
//       this.props.currentPage.render({canvasContext: context, viewport: viewport})
//       // this.mainCanvas.current.appendChild(canvas)
//   }
//
//   render() {
//     return (
//       <Fragment>
//         <canvas ref={this.mainCanvas}></canvas>
//       </Fragment>
//     );
//   }
// }
//
// MainView.propTypes = {
//   currentPage: PropTypes.object.isRequired
// }




import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RenderCanvas } from '../RenderCanvas'


export class MainView extends Component {
  state = {
    page: null,
  }
  componentDidMount(){
    this.updatePage()
  }
  updatePage = () => {
    let { pdfDocument, currentPage } = this.props
    pdfDocument.getPage(currentPage).then(page =>{
      this.setState({
        page: [page],
      })
    })
  }

  static getDerivedStateFromProps(nextProps){
    let { pdfDocument, currentPage } = nextProps
    let Page = []
  pdfDocument.getPage(currentPage).then(page =>{
        return  Page.push(page)
      })
      return {
        page: Page
      }
  }
  render(){
    console.log(this.state.page)
    console.log(this.props)
    return null
  }
}
