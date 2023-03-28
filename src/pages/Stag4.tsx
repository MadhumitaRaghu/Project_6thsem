import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c = require("../markdown/Stage4.md")

const Stag4 = () => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c}></Code>      
      
      </div>
  )
}

export default Stag4;