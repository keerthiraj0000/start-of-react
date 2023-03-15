import React, { Component } from 'react'
import './global1.css'

export default class Capp extends Component {
  
constructor()
{
    super()
    this.state={count:0}
}
 handleIncre=()=>{
    this.setState({count:this.state.count+1})
 }
handleDecre=()=>
{
    this.setState({count:this.state.count-1})
}
handleReset=function(){
    this.setState({count:0})
}

  render() {
    return (
      <div className='block1'>
   <h1>{this.state.count}</h1>
    
   <button onClick={this.handleIncre}> + increment</button>
   <button onClick={this.handleDecre}> - decrement</button>
   <button onClick={this.handleReset.bind(this)}>RESET</button>


      </div>
    )
  }
}
