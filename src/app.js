import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'

export var App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          left: 288,
          top: 190,
        }}
      >
        hello this is a test for utopia
      </div>
    </div>
  )
}
