import React from 'react'
import { render } from 'react-dom'
// import Skeleton from '../../src/index.ts' // 引入组件
import Skeleton from 'react-skeleton-component';

const App = () => {
  return (
    <div>
      dddd
      <Skeleton/>
    </div>
  )
}
render(<App />, document.getElementById('root'))