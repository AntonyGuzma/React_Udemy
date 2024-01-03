import { useState, useEffec, useRef, useEffect } from 'react'
import Toolbar from './components/Toolbar'
import { marked } from 'marked'

function App() {

  //condição para exibir o que tiver no local storage
  const [text, setText] = useState( localStorage.getItem("markdownText") || '# Ola');
  const textAreaRef = useRef(null)

  const renderText = () => {
    return { __html: marked(text)}
  }

  useEffect(() => {
    localStorage.setItem("markdownText", text)
  }, [text])

  const insertText = (before, after) => {

    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previusText = textArea.value;
    const beforeText = previusText.substring(0, start)
    const selectText = previusText.substring(start, end)
    const afterText = previusText.substring(end)

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`;
    setText(newText);
    textArea.focus();

  }

  return (
    <div className="app-container">
      <Toolbar insertText={insertText}/>
      <textarea ref={textAreaRef} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div dangerouslySetInnerHTML={renderText()}></div>
    </div>
  )
}

export default App
