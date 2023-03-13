import React from 'react'
import { Component } from 'react'
class App2 extends Component
{
   state={
    username :"raj",
    password :143
   }
   
   
    render()
    {
        return(<>
        
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
        </>)
    }
}
export default App2