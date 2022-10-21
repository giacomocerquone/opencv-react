import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// React 18 uses createRoot
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
createRoot(document.getElementById('root')).render(<App />)
