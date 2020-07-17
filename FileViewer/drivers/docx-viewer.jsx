/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import mammoth from 'mammoth';

import './styles/docx.scss';
import Loading from '../loading';

export default class extends Component {
  componentDidMount() {
    const jsonFile = new XMLHttpRequest();
    jsonFile.open('GET', this.props.filePath, true);
    jsonFile.send();
    jsonFile.responseType = 'arraybuffer';
    jsonFile.onreadystatechange = () => {
      if (jsonFile.readyState === 4 && jsonFile.status === 200) {
        mammoth
          .convertToHtml({ arrayBuffer: jsonFile.response }, { includeDefaultStyleMap: true })
          .then(result => {
            const docEl = document.createElement('div');
            docEl.className = 'document-container';
            docEl.innerHTML = result.value;
            document.getElementById('docx').innerHTML = docEl.outerHTML;
          })
          .catch(a => {
            window.console.log('啊哦~ 出错了', a);
          })
          .done();
      }
    };
  }

  render() {
    return (
      <div id="docx" style={{ boxShadow: '0 0 12px rgba(0,0,0,.2)' }}>
        <Loading />
      </div>
    );
  }
}
