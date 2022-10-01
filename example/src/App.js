import React from 'react'

import { OpenCvProvider, useOpenCv } from 'opencv-react'

function MyComponent() {
  const cv = useOpenCv()
  console.log(cv)
  return <p>OpenCv React test: {cv ? 'loaded.' : 'loading...'}</p>
}

const App = () => {
  return (
    <OpenCvProvider openCvPath='/opencv/opencv.js'>
      <MyComponent />
    </OpenCvProvider>
  )
}

export default App
