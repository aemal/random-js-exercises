import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {RenderCanvas} from '../RenderCanvas'

export class ThumbnailsView extends Component {
  // state = {
  //   pages: []
  // }
  handleClicked = (pageIndex) => {
    this.props.pageClicked(pageIndex)
   }
  // componentDidMount(){
  //   let {pdfDocument} = this.props
  //   let totalPages = pdfDocument.numPages
  //   for(let i = 1; i < totalPages+1; i++){
  //     pdfDocument.getPage(i).then(page => {
  //       this.setState({
  //         pages: [...this.state.pages, page]
  //       })
  //     })
  //   }
  // }
  render() {
    const { pdfDocument } = this.props
    let ThumbnailsViewJSX =   pdfDocument
                              ? <RenderCanvas
                                  pdfDocument={pdfDocument}
                                  scale={0.2}
                                  handleClicked={this.handleClicked}>
                                  {canvases => canvases}
                                </RenderCanvas>
                              : null
    return (
      <Fragment>
        {ThumbnailsViewJSX}
      </Fragment>
    );
  }
}

ThumbnailsView.propTypes = {
  pdfDocument: PropTypes.object.isRequired,
  pageClicked: PropTypes.func.isRequired
}
