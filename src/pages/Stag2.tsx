import React from 'react'
import Post from '../components/Post'
import Code from '../components/Code'
const c2 = require("../markdown/Stage2.md")

const Stag2 = ({cmd}:any) => {
  // let c="a";
  return (
    <div className='pages'>
    <Code content={c2} cmd={cmd}></Code>      
      
      </div>
  )
}

export default Stag2;