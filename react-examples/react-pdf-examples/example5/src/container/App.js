import React, { Component } from 'react'
import {ThumbnailsView } from '../Components/ThumbnailsView/ThumbnailsView'
import { MainView } from '../Components/MainView/MainView'
import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 2
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
                className='MainView'
                pdfDocument={pdfDocument}
                currentPage={currentPage}/>
              : <div>Select any page to view that page in a sensible way :)</div>
    let ThumbnailsViewJSX = pdfDocument
          ? <ThumbnailsView
              className='ThumbnailsView'
              pdfDocument={pdfDocument}
              pageClicked={this.pageClicked} />
          : Spinner
    return (
      <div className='container'>
        {ThumbnailsViewJSX}

        {MainViewJSX}
      </div>
    );
  }
}
