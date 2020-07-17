/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Loading from '../loading';

import './styles/video.scss';

class VideoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  onCanPlay() {
    this.setState({ loading: false });
  }

  renderLoading() {
    if (this.state.loading) {
      return <Loading />;
    }
    return null;
  }

  render() {
    const visibility = this.state.loading ? 'hidden' : 'visible';
    return (
      <div className="video-container">
        {this.renderLoading()}
        <video
          id="React-VideoS"
          style={{ visibility, boxShadow: '0 0 12px rgba(0,0,0,.2)' }}
          controls
          onCanPlay={e => this.onCanPlay(e)}
          width="100%"
          controlslist="nodownload"
          muted
        >
          <source src={this.props.filePath} type={`video/${this.props.fileType}`} />
        </video>
      </div>
    );
  }
}

export default VideoViewer;
