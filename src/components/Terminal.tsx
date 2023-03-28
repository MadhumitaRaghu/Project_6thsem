import {useEffect,useRef} from 'react'
import {XTerm} from 'xterm-for-react'
const Terminal = () => {
  const xtermRef = useRef<any>(null)
  useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln("Hello, World!")
}, [])
  return (
    <div id='terminal'>
        
        <XTerm ref={xtermRef} options={{cursorBlink:true,cursorWidth:1 }}></XTerm>
        </div>

  )
}

export default Terminal