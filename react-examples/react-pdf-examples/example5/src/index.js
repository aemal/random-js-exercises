import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
// import pdfUrl from './assets/sample.pdf'
import withPdf from './HOC/withPdf'
import Spinner from './Components/Spinner/Spinner'
import 'pdfjs-dist'

const Url = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf'
const Loader = <Spinner />

const AppWithPdf = withPdf(App, Url, Loader)

const mount = <AppWithPdf spinner={Spinner} />
const node = document.getElementById('root')
render(mount, node)
