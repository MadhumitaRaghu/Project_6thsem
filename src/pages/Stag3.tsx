import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c = require("../markdown/Stage3.md")

const Stag3 = () => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c}></Code>      
      
      </div>
  )
}

export default Stag3;