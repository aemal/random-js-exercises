import React from 'react'
import PropTypes from 'prop-types'

const PdfViewer = ({ getPdfPage }) => {
  return (
    <div>Pdf Viewer</div>
  )
}

PdfViewer.propTypes = {
  getPdfPage: PropTypes.func.isRequired
}

export default PdfViewer
