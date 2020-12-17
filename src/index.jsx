import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import './index.less'

const title = {
  en: 'Hello world',
  cn: '你好，世界！',
  kn: 'jjjjj',
}

ReactDOM.render(<div className="container">{title.kn}</div>, document.querySelector('#root'))
