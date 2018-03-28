import * as React from 'react'
import * as enzyme from 'enzyme'
import Header from './'
import { _props } from './types.d'

const defaultProps: _props = {
  type: 'desktop',
  auth: true
}

describe('<Header />', () => {
  it('renders', () => {
    enzyme.shallow(<Header {...defaultProps}/>)
  })
})