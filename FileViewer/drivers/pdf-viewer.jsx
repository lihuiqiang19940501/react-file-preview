/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { PDFReader } from 'react-read-pdf';
import { Pagination } from 'antd';

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
    };
  }

  render() {
    const { filePath, width } = this.props;
    const { page, total } = this.state;
    const pageChange = current => {
      this.setState({ page: current });
    };
    return (
      <div
        style={{ overflowY: 'auto', position: 'relative', boxShadow: '0 0 12px rgba(0,0,0,.2)' }}
      >
        <PDFReader
          width={width}
          page={page}
          onDocumentComplete={pat => this.setState({ total: pat })}
          url={filePath}
        />
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Pagination
            simple
            current={page}
            defaultPageSize={1}
            total={total}
            onChange={current => pageChange(current)}
          />
        </div>
      </div>
    );
  }
}
