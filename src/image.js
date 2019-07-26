import React, {useState} from 'react'
import './image.css'



function Image(){
  return(
    <div className="container">
      <img className="avg" src={require('./avg.png')} />
    </div>
  )
}

export default Image;