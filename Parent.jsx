import React from 'react'
import JSON from './JSON.json'
import Child from './Child'
import './global.css'

const Parent = () => {
  return (
    <div>
        <Child data={JSON}/>
    </div>
  )
}

export default Parent