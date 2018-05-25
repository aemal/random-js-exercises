import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {PdfCanvas} from './PdfCanvas'

export  class Thumbnails extends Component {
  constructor(){
    super()
    this.state ={
      pages: []
    }
  }
  componentDidMount(){
    let pdfDoc = this.props.pdfDoc
    let totalPages = this.props.pdfDoc.numPages
    let pages = []

      for (let i = 1; i < totalPages + 1; i++){
        pdfDoc.getPage(i)
        .then(page => {
           pages.push(page)
             return this.setState({
               pages,
             })
          })
    }
  }
  shouldComponentUpdate(prevProps, nextProps){
    if (prevProps !== nextProps){
      return true
    }
    return false
  }
  handleClicked = (pageIndex) => {
    this.props.pageClicked(pageIndex)
  }
  render() {
    const { pages } = this.state
    console.log(this.state)
    return (
      <div>
        {pages !== null
          ? <PdfCanvas pages={pages}
                handleClicked={this.handleClicked}>
                  {MappedPage => MappedPage}
            </PdfCanvas>
          : null}
      </div>
    );
  }
}

Thumbnails.propTypes = {
  pdfDoc: PropTypes.object.isRequired,
  pageClicked: PropTypes.func.isRequired
}
