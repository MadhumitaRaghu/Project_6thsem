import {useEffect,useRef} from 'react'
import {XTerm} from 'xterm-for-react'
const Terminal = ({ cmd} : any) => {
  const xtermRef = useRef<any>(null)
  console.log("heloooooooooo")
  useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln(cmd)
}, [])
  return (
    <div id='terminal'>
        
        <XTerm ref={xtermRef} options={{cursorBlink:true,cursorWidth:1 }}></XTerm>
        </div>

  )
}

export default Terminal