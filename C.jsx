import React from "react";
// import P from './P'

const C=(props)=>{
   console.log(props);
   
   return(<>
     <h1>{props.data.password}</h1>
    </>)
}
export default C