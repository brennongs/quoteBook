#!/usr/bin/env node
const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const child = require('child_process')

configure({ adapter: new Adapter() })