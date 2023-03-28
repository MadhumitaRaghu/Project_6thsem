import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c=require("../markdown/Stage0.md")

const Analytics = () => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c}></Code>      
      
      </div>
  )
}

export default Analytics