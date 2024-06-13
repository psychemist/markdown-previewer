import { useEffect, useState } from 'react'
import Editor from './Editor'
import Previewer from './Previewer'
import '../styles/App.css'

export default function App() {
  const [text, setText] = useState('Start here!')

  const handleChange = (markup) => {
    setText(markup)
  }

  return (
    <section>
      <Editor text={text} changeText={handleChange} />
      <Previewer text={text} />
    </section>
  )
}
