import React from 'react'

import { OpenCvProvider, useOpenCv } from 'opencv-react'

function MyComponent() {
  const data = useOpenCv()
  console.log(data)
  return <p>OpenCv React test</p>
}

const App = () => {
  const onLoaded = (cv) => {
    console.log('opencv loaded, cv')
  }

  return (
    <OpenCvProvider onLoad={onLoaded} openCvPath='/opencv/opencv.js'>
      <MyComponent />
    </OpenCvProvider>
  )
}

export default App
