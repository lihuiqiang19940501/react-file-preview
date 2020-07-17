/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';

const errorIcon = require('../../assets/showError.png');

const Error = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div style={{ paddingTop: '30px', textAlign: 'center' }}>
    <img src={errorIcon} alt="error" />
    <p style={{ paddingTop: '15px' }}>
      <CloseCircleOutlined /> 资源预览失败~
    </p>
  </div>
);

export default Error;
