import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
import samplePdf from './assets/sample.pdf'
import withPdf from './HOC/withPdf'


const Spinner = <h1>Loading...</h1>
const AppWithPdf = withPdf(App, samplePdf, Spinner)

const mount = <AppWithPdf spinner={Spinner} />
const node = document.getElementById('root')
render(mount, node)
