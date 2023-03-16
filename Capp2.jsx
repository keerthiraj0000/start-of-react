import React from 'react'
import { faker } from '@faker-js/faker'
const Capp2 = () => {
//   let [username,setUsername]=React.useState("raj")
  let [img,setImage]=React.useState(faker.image.avatar())
let handleChange=()=>
  {
    setImage(faker.image.avatar())
  }
  
  
  return (
    <div>
        <img src={img} alt="" />
        {/* <h1>{img}</h1> */}
        <button onClick={handleChange}>change</button>
        </div>
  )
}

export default Capp2