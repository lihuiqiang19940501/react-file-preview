import React from 'react';
import { Spin } from 'antd';

const Loading = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div style={{ textAlign: 'center', paddingTop: '50px' }}>
    <Spin tip="加载中..." />
  </div>
);

export default Loading;
