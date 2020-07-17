/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './drivers/styles/main.scss';
import {
  DocxViewer,
  VideoViewer,
  PDFViewer,
  UnsupportedViewer,
  PhotoViewer,
  AudioViewer,
  FlashViewer,
} from './drivers';
import Loading from './loading';
import Error from './error';

class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error404: false,
    };
  }

  componentWillMount() {
    const { filePath } = this.props;
    this.createRequest(filePath);
  }

  componentDidMount() {
    const container = document.getElementById('pg-viewer');
    const height = container ? container.clientHeight : 0;
    const width = container ? container.clientWidth : 0;
    this.setState({ height, width });
  }

  getDriver() {
    switch (this.props.fileType) {
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'png': {
        return PhotoViewer;
      }
      case 'pdf': {
        return PDFViewer;
      }
      case 'docx': {
        return DocxViewer;
      }
      case 'mp3': {
        return AudioViewer;
      }
      case 'webm':
      case 'mp4': {
        return VideoViewer;
      }
      case 'swf': {
        return FlashViewer;
      }
      default: {
        return UnsupportedViewer;
      }
    }
  }

  createRequest(path) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 600);
      }
    };
    xhr.onload = () => {
      if (xhr.status !== 200) {
        this.setState({ error404: true });
      }
    };
    xhr.send();
  }

  render() {
    const Driver = this.getDriver(this.props);
    const { width, height } = this.props;
    const { loading, error404 } = this.state;
    return (
      <div className="pg-viewer-wrapper">
        <div className="pg-viewer" id="pg-viewer">
          {!error404 && loading ? (
            <Loading />
          ) : (
            <Driver
              {...this.props}
              width={width || this.state.width}
              height={height || this.state.height}
            />
          )}
          {error404 && <Error />}
        </div>
      </div>
    );
  }
}

FileViewer.propTypes = {
  fileType: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  onError: PropTypes.func,
  errorComponent: PropTypes.element,
  unsupportedComponent: PropTypes.element,
};

FileViewer.defaultProps = {
  onError: () => null,
  errorComponent: null,
  unsupportedComponent: null,
};

export default FileViewer;
