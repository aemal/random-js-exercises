import React, { Component, Fragment } from 'react'
import {ThumbnailsView } from '../Components/ThumbnailsView/ThumbnailsView'
import { MainView } from '../Components/MainView/MainView'
import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 1,
      scale: 1
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

  scaleChanged = operation => {
    if(operation === 'in'){
      let newScale = this.state.scale + 0.25
      if(newScale <= 3){
        this.setState({
          scale: newScale
        })
      } else {
        alert(`You cant zoom in more than 3 scale`)
      }
    } else if(operation === 'out'){
        let newScale = this.state.scale - 0.25
        if (newScale >= 0.25){
          this.setState({
            scale: newScale
          })
        } else {
          alert(`You cant zoom out more than 0.25 scale`)
        }
      }
  }

  render() {
    const { currentPage, scale } = this.state
    const { pdfDocument, Spinner } = this.props
    let MainViewJSX = currentPage
            ? <MainView
                className='MainView'
                pdfDocument={pdfDocument}
                currentPage={currentPage}
                scale={scale}
                scaleChanged={this.scaleChanged}/>
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
        <Fragment>
        <button onClick={this.pageChanged.bind(null, 'prev')}>Prev Page</button>
        <button onClick={this.pageChanged.bind(null, 'next')}>Next Page</button>
        <button onClick={this.scaleChanged.bind(null, 'out')}>Zoom Out</button>
        <button onClick={this.scaleChanged.bind(null, 'in')}>Zoom In</button>
        </Fragment>
        {MainViewJSX}
      </div>
    );
  }
}
