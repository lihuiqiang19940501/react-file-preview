/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class FlashViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { filePath } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div style={{ width: '1100px' }}>
        <embed
          src={filePath}
          type="application/x-shockwave-flash"
          width="100%"
          height="550px"
          quality="high"
        />
      </div>
    );
  }
}

export default FlashViewer;
