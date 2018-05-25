import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
import samplePdf from './assets/sample.pdf'
import withPdf from './HOC/withPdf'


const Spinner = <div>Wait!!!!</div>
const AppWithPdf = withPdf(App, samplePdf, Spinner)

const mount = <AppWithPdf />
const node = document.getElementById('root')
render(mount, node)
