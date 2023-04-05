import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
// import { FitAddon } from 'xterm-addon-fit';
// import {marked} from 'marked';
import Markdown from "markdown-to-jsx";
import { renderToStaticMarkup } from 'react-dom/server';

import 'xterm/css/xterm.css';

function Terminal2({ markdownText }) {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    let singleLineTexts = markdownText.split("\r");
    terminal.open(terminalRef.current);
    for (let i = 0; i < singleLineTexts.length; i++) {
      terminal.write('root@\x1B[1;3;31mncn-n001\x1B[0m :~ ')
    // const html = Markdown.render(singleLineTexts[i]);
    const jsx = <Markdown >{singleLineTexts[i]}</Markdown>;
  const html = renderToStaticMarkup(jsx);
    const convertedText = html.replace(/<\/?[^>]+(>|$)/g, "");
    terminal.write(convertedText);
    terminal.write("\r");
    }
    
    

    // fitAddon.fit();

    return () => {
      terminal.dispose();
    };
  }, [markdownText]);

  return <div ref={terminalRef} />;
}

export default Terminal2;
