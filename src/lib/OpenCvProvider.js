import * as React from 'react'

const OpenCvContext = React.createContext()

const { Consumer: OpenCvConsumer, Provider } = OpenCvContext

export { OpenCvConsumer, OpenCvContext }

export const OpenCvProvider = ({ openCvVersion = '4.5.5', openCvPath = '', children }) => {
  const [cvInstance, setCvInstance] = React.useState();

  React.useEffect(() => {
    const scriptId = 'opencv-react'
    if (document.getElementById(scriptId) || window.cv) {
      return
    }

    window.Module = window.Module || {
      wasmBinaryFile: 'opencv_js.wasm',
      usingWasm: true,
      onRuntimeInitialized: () => {
        console.log('opencv loaded', window.cv)
        setCvInstance(window.cv);
      }
    }

    // https://docs.opencv.org/3.4/dc/de6/tutorial_js_nodejs.html
    // https://medium.com/code-divoire/integrating-opencv-js-with-an-angular-application-20ae11c7e217
    // https://stackoverflow.com/questions/56671436/cv-mat-is-not-a-constructor-opencv
    const scriptElement = document.createElement('script')
    scriptElement.id = scriptId
    scriptElement.nonce = true
    scriptElement.defer = true
    scriptElement.async = true
    scriptElement.src = ((openCvPath !== '') ? openCvPath : `https://docs.opencv.org/${openCvVersion}/opencv.js`);
    document.body.appendChild(scriptElement)
  }, [openCvPath, openCvVersion])

  return (
    <Provider value={cvInstance}>
      {children}
    </Provider>
  )
}
