import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const title = {
  en: 'Hello world',
  cn: '你好，世界！',
}

ReactDOM.render(<div className="container">{title.cn}</div>, document.querySelector('#root'))
