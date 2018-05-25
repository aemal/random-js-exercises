import React, { PureComponent, Fragment } from 'react'
import {ThumbnailsView } from '../Components/ThumbnailsView/ThumbnailsView'
// import { MainView } from '../Components/MainView/MainView'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      pdfDoc: null,
      pages: [],
      totalPages: null,
      currentPage: null
    }
  }


   componentDidMount() {
     const pdfDoc = this.props.pdfDocument
     let totalPages = pdfDoc.numPages

     if (pdfDoc) {
       for (let i = 1; i < totalPages + 1; i++){
         pdfDoc.getPage(i)
          .then(page => {
            return this.setState({
              pdfDoc,
              totalPages,
              pages: [...this.state.pages, page]
            })
          })
       }
     }
  }

  pageClicked = (pageIndex) => {
    let pages = this.state.pages
    let currentPage = pages.find((page) => {
      return page.pageIndex === pageIndex
    })
    this.setState({
      currentPage
    })
  }
  render() {
    const { pages, totalPages } = this.state
    console.log(this.state)
    return (
      <Fragment>
        {
          totalPages === pages.length
          ? <ThumbnailsView
                pages={pages}
                pageClicked={this.pageClicked} />
              :<div>wait...</div>

        }
      </Fragment>
    );
  }
}
