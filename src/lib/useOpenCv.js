import * as React from 'react'
import { OpenCvContext } from './OpenCvProvider'

export const useOpenCv = () => React.useContext(OpenCvContext)
