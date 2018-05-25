import PropTypes from 'prop-types'

export const ThumbnailsCanvas = ({ pages, children, handleClicked, scale }) => {
  let Thumbnail = pages.map(page => {
    //This gives us the page's dimensions at full scale
    let viewport = page.getViewport(scale);

    //We'll create a canvas for each page to draw it on
    let canvas = document.createElement( "canvas" );
    canvas.onclick = () => handleClicked(page.pageIndex)
    let context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //Draw it on the canvas
    page.render({canvasContext: context, viewport: viewport})

    //Add it to the web page
    document.body.appendChild(canvas)

    return null
  })
  return (
    children(Thumbnail)
  );
}

ThumbnailsCanvas.propTypes = {
  pages: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  handleClicked: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired
}
