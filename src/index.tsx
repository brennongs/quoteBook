import * as React from 'react'
import { render } from 'react-dom'

import { Header } from './components'

render(
  <main className='app'>
    <Header 
      type='desktop'
      auth />
  </main>,
  document.getElementById('root')
)