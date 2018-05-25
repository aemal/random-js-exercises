import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types'
import {ThumbnailsCanvas} from './ThumbnailsCanvas'

export  class ThumbnailsView extends PureComponent {
  handleClicked = (pageIndex) => {
    this.props.pageClicked(pageIndex)
  }

  render() {
    const { pages } = this.props
    return (
      <Fragment>
        <ThumbnailsCanvas pages={pages}
            scale={0.2}
            handleClicked={this.handleClicked}>
              {Thumbnail => Thumbnail}
        </ThumbnailsCanvas>
      </Fragment>
    );
  }
}

ThumbnailsView.propTypes = {
  pages: PropTypes.array.isRequired,
  pageClicked: PropTypes.func.isRequired
}
