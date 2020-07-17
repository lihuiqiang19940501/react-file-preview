/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './styles/unsupported.scss';

const UnsupportedViewer = props => (
  <div className="pg-driver-view">
    <div className="unsupported-message">
      {props.unsupportedComponent ? (
        <props.unsupportedComponent {...props} />
      ) : (
        <p className="alert" style={{ paddingTop: '30px' }}>
          <ExclamationCircleOutlined /> <b>{`${props.fileType}`}</b>格式暂不支持预览请下载后查看。
        </p>
      )}
    </div>
  </div>
);

export default UnsupportedViewer;
