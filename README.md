# react-file-preview(基于Ant Design集成的资源预览组件)
目前支持格式: 音频(mp3),视频(mp4),flash(swf),图片(png、jpg、jpeg、gif),文档(pdf、docx)等

图片预览和pdf需要安装依赖<br> 
>>react-zmage:   `npm install --save react-zmage` <br> 
>>react-read-pdf:    `npm install --save react-read-pdf` <br> 
可选@ant-design/icons 图标<br> 

### 用法 To use ?
```javascript
import FileViewer from 'xxxxxx/FileViewer'

 <FileViewer fileType={} filePath={url} />
 ```
 
 `fileType: 文件类型: mp3/mp4/png...`<br> 
 `filePath: 文件地址 url/require('绝对路径')`
 
 ![image](https://github.com/lihuiqiang19940501/react-file-preview/blob/master/preview/Flash%E9%A2%84%E8%A7%88.png)
 
 ![image](https://github.com/lihuiqiang19940501/react-file-preview/blob/master/preview/%E4%B8%8D%E6%94%AF%E6%8C%81.png)
 
 ![image](https://github.com/lihuiqiang19940501/react-file-preview/blob/master/preview/%E5%8A%A0%E8%BD%BD%E4%B8%AD.png)
 
 ![image](https://github.com/lihuiqiang19940501/react-file-preview/blob/master/preview/%E9%A2%84%E8%A7%88%E5%A4%B1%E8%B4%A5.png)
