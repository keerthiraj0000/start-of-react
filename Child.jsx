import React from 'react'

const Child = (props) => {
  return (<>
    <div id="top">
    <h1> KANNADA MOVIES</h1>
   <div id="first">
    <div id="block1">
   <img src={props.data[0].moviePic} alt="" />
   <h1>{props.data[0].movieName}</h1>
   <h2>{props.data[0].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[0].releaseDate}</h2>
   <h3>{props.data[0].costOfMaking}</h3>
   </div>
   
   <div id="block1">
   <img src={props.data[1].moviePic} alt="" />
   <h1>{props.data[1].movieName}</h1>
   <h2>{props.data[1].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[1].releaseDate}</h2>
   <h3>{props.data[1].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[2].moviePic} alt="" />
   <h1>{props.data[2].movieName}</h1>
   <h2>{props.data[2].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[2].releaseDate}</h2>
   <h3>{props.data[2].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[3].moviePic} alt="" />
   <h1>{props.data[3].movieName}</h1>
   <h2>{props.data[3].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[3].releaseDate}</h2>
   <h3>{props.data[3].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[4].moviePic} alt="" />
   <h1>{props.data[4].movieName}</h1>
   <h2>{props.data[4].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[4].releaseDate}</h2>
   <h3>{props.data[4].costOfMaking}</h3>
</div>
</div>

<h1>ENGLISH MOVIES</h1>
<div id="first">
    <div id="block1">
   <img src={props.data[5].moviePic} alt="" />
   <h1>{props.data[5].movieName}</h1>
   <h2>{props.data[5].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[5].releaseDate}</h2>
   <h3>{props.data[5].costOfMaking}</h3>
   </div>
   
   <div id="block1">
   <img src={props.data[6].moviePic} alt="" />
   <h1>{props.data[6].movieName}</h1>
   <h2>{props.data[6].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[6].releaseDate}</h2>
   <h3>{props.data[6].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[7].moviePic} alt="" />
   <h1>{props.data[7].movieName}</h1>
   <h2>{props.data[7].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[7].releaseDate}</h2>
   <h3>{props.data[7].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[8].moviePic} alt="" />
   <h1>{props.data[8].movieName}</h1>
   <h2>{props.data[8].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[8].releaseDate}</h2>
   <h3>{props.data[8].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[9].moviePic} alt="" />
   <h1>{props.data[9].movieName}</h1>
   <h2>{props.data[9].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[9].releaseDate}</h2>
   <h3>{props.data[9].costOfMaking}</h3>
</div>
</div>
<h1>TELUGU MOVIES</h1>
<div id="first">
    <div id="block1">
   <img src={props.data[10].moviePic} alt="" />
   <h1>{props.data[10].movieName}</h1>
   <h2>{props.data[10].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[10].releaseDate}</h2>
   <h3>{props.data[10].costOfMaking}</h3>
   </div>
   
   <div id="block1">
   <img src={props.data[11].moviePic} alt="" />
   <h1>{props.data[11].movieName}</h1>
   <h2>{props.data[11].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[11].releaseDate}</h2>
   <h3>{props.data[11].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[12].moviePic} alt="" />
   <h1>{props.data[12].movieName}</h1>
   <h2>{props.data[12].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[12].releaseDate}</h2>
   <h3>{props.data[12].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[13].moviePic} alt="" />
   <h1>{props.data[13].movieName}</h1>
   <h2>{props.data[13].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[13].releaseDate}</h2>
   <h3>{props.data[13].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[14].moviePic} alt="" />
   <h1>{props.data[14].movieName}</h1>
   <h2>{props.data[14].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[14].releaseDate}</h2>
   <h3>{props.data[14].costOfMaking}</h3>
</div>
</div>
<h1>TAMIL MOVIES</h1>
<div id="first">
    <div id="block1">
   <img src={props.data[15].moviePic} alt="" />
   <h1>{props.data[15].movieName}</h1>
   <h2>{props.data[15].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[15].releaseDate}</h2>
   <h3>{props.data[15].costOfMaking}</h3>
   </div>
   
   <div id="block1">
   <img src={props.data[16].moviePic} alt="" />
   <h1>{props.data[16].movieName}</h1>
   <h2>{props.data[16].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[16].releaseDate}</h2>
   <h3>{props.data[16].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[17].moviePic} alt="" />
   <h1>{props.data[17].movieName}</h1>
   <h2>{props.data[17].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[17].releaseDate}</h2>
   <h3>{props.data[17].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[18].moviePic} alt="" />
   <h1>{props.data[18].movieName}</h1>
   <h2>{props.data[18].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[18].releaseDate}</h2>
   <h3>{props.data[18].costOfMaking}</h3>
</div>
<div id="block1">
   <img src={props.data[19].moviePic} alt="" />
   <h1>{props.data[19].movieName}</h1>
   <h2>{props.data[19].actors.map((x)=>{
    return <li>{x}</li>
   })}</h2>
   <h2>{props.data[19].releaseDate}</h2>
   <h3>{props.data[19].costOfMaking}</h3>
</div>
</div>
</div>
    
    </>
  )
}

export default Child