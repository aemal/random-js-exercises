import React, { PureComponent, Fragment } from 'react'
import {Thumbnails} from '../Components/Thumbnails'


export default class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      pdfDoc: null,
      currentPage: null
    }
  }


   componentDidMount() {
     const pdfDoc = this.props.pdfDocument
     if (pdfDoc) {
       this.setState({
           pdfDoc,
       })
     }
  }

  pageClicked = (pageIndex) => {
    this.setState({
      currentPage: pageIndex
    })
  }
  render() {
    const { pdfDoc } = this.state
    console.log("rendering main")
    return (
      <Fragment>
      {pdfDoc !== null
        ? <Thumbnails
            pdfDoc={pdfDoc}
            pageClicked={this.pageClicked} />
        : null}
      </Fragment>
    );
  }
}
