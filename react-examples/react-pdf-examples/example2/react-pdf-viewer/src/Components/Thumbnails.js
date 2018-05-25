import React from 'react'
import PropTypes from 'prop-types'
import PdfAnnotator from 'react-pdf-annotator'
const Thumbnails = (props) => {
  let App =   props.pages.map((page, index) => {
      return (
        <PdfAnnotator pdfDocument={page} />
      )
    })
  console.log(App)

  return (App)
}

Thumbnails.propTypes = {
  pages: PropTypes.array.isRequired
}
export default Thumbnails
