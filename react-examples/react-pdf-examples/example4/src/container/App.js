import React, { PureComponent } from 'react'
// import { MainView } from '../Components/MainView/MainView'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     currentPage: 1
    }

    for(let page = 1; page <= props.pdfDocument.numPages; page++) {
      this[`page${page}`] = React.createRef();
    }
    this.pageMain = React.createRef();
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

  componentDidMount() {
    for(let page = 1; page <= this.props.pdfDocument.numPages; page++) {
      this.loadPage(page, this['page'+page]);
    } 
  }

  loadPage(pageNumber, canvasRef, scale = 0.3) {
    this.props.pdfDocument.getPage(pageNumber).then((page) => {
      var viewport = page.getViewport(scale);
      let canvas = canvasRef.current;

      let context = canvas.getContext('2d')
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      page.render({canvasContext: context, viewport: viewport})
    });
  }


  makeCanvase(pageNumber, main = false) {
      return (
        <canvas 
          onClick={main !== true ? () => this.loadPage(pageNumber, this.pageMain, 1) : null }
          key={pageNumber}
          ref={this[`page${pageNumber}`]}
        >
        </canvas>
      );
  }

  makeCanvases() {
    let pages = [...Array(this.props.pdfDocument.numPages).keys()];
    return(pages.map(page => this.makeCanvase(page+1)));
  }

  render() {
   return(
     <div>
      {this.makeCanvases()}
      {this.makeCanvase('Main', true)}
    </div>
   );
  }
}
