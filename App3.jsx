import React from 'react'
import { Component } from 'react'
class App3 extends Component
{
   constructor()
   {
    super()
    this.state={username:"swap"}
   }
   
   
   
    render()
    {
        return <h1>{this.state.username}</h1>
    }
}
export default App3