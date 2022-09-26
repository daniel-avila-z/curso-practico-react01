import React from 'react'
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom'
import App from '@routes/App'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab />)

// ReactDOM.render(<App />, document.getElementById('app'));
