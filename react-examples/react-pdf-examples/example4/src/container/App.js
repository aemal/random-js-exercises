import React, { Component, Fragment } from 'react'
import {ThumbnailsView } from '../Components/ThumbnailsView/ThumbnailsView'
 import { MainView } from '../Components/MainView/MainView'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: null
    }
  }


  pageClicked = (pageIndex) => {
    this.setState({
      currentPage: pageIndex
    })
  }
  render() {
    const { currentPage } = this.state
    const { pdfDocument, Spinner } = this.props
    let MainViewJSX = currentPage
            ? <MainView
                currentPage={currentPage}
                pdfDocument={pdfDocument}/>
            : null
    let ThumbnailsViewJSX = pdfDocument
          ? <ThumbnailsView
              pdfDocument={pdfDocument}
              pageClicked={this.pageClicked} />
          : Spinner
    return (
      <Fragment>
        {MainViewJSX}
        {ThumbnailsViewJSX}
      </Fragment>
    );
  }
}
