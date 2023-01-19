import React from 'react'

import { OpenCvProvider, useOpenCv } from 'opencv-react'

function MyComponent() {
  const data = useOpenCv()
  console.log(data)
  return <p>OpenCv React test: {data.cv ? 'loaded.' : 'loading...'}</p>
}

const App = () => {
  return (
    <OpenCvProvider
      openCvPath={
        process.env.NODE_ENV === 'development'
          ? '/opencv/opencv.js'
          : '/static/opencv/opencv.js'
      }
    >
      <MyComponent />
    </OpenCvProvider>
  )
}

export default App
