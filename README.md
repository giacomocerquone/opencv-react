# opencv-react

<div id="description" />

Hooks-first minimal OpenCV wrapper for React.<br/>
It simplifies the import of this library and integrates it well with the React ecosystem.<br />
**Bear in mind** that the loading of the library, being huge, is done asynchronously. Of course you can

## API

## `OpenCvProvider`

### Props

- **openCvPath**: string used to indicate where to load the OpenCv lib from (default to official cdn)
- **onLoad**: function that gets called whenever the library has finished loading (see the package [description](#description))

**Usage**:

```js
const MyApp = () => {
  return (
    <OpenCvProvider>
      <MyComponent />
    </OpenCvProvider>
  )
}
```

## `useOpenCv`

### Context object

```
{
  loading: boolean, indicates if the opencv library is loading (useful to show a spinner)
  cv: undefined or the OpenCV global instance (can also be found in window.cv)
}
```

```js
function MyComponent() {
  const { loading, cv } = useOpenCv()

  useEffect(() => {
    if (cv) {
    }
  }, [cv])

  return <p>OpenCv React test</p>
}
```

## Quick Start

```javascript
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
```

> _Check also the example folder_

## Todo

- tests
- prop types

## Projects that uses this lib

WIP
