/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import Zmage from 'react-zmage';

import './styles/photo-viewer.scss';

export default class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImg: false,
    };
  }

  componentDidMount() {
    const { filePath } = this.props;
    const img = new Image();
    img.src = filePath;
    img.onload = () => {
      this.setState({ hasImg: true });
    };
  }

  render() {
    const { filePath } = this.props;
    const { hasImg } = this.state;
    return hasImg ? (
      <div style={{ boxShadow: '0 0 12px rgba(0,0,0,.2)' }}>
        <Zmage src={filePath} alt="" />
      </div>
    ) : null;
  }
}
