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

  pageChanged = operation => {
    if(operation === 'next'){
      let nextPage = this.state.currentPage + 1
      let totalPages = this.props.pdfDocument.numPages
      if(nextPage <= totalPages){
        this.setState({
          currentPage: nextPage
        })
      } else {
        alert(`Invalid page to go forward ${nextPage}`)
      }
    } else if(operation === 'prev'){
        let prevPage = this.state.currentPage-1
        if (prevPage > 0){
          this.setState({
            currentPage: prevPage
          })
        } else {
          alert(`Invalid page to go back ${prevPage}`)
        }
      }

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
        <button onClick={this.pageChanged.bind(this, 'prev')}>Prev Page</button>
        {MainViewJSX}
        <button onClick={this.pageChanged.bind(this, 'next')}>Next Page</button>
      </div>
    );
  }
}
