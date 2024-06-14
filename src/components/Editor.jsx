import '../styles/Editor.css'

export default function Editor({ text, changeText }) {
  return (
    <textarea
      id="editor"
      value={text}
      onChange={changeText}>
    </textarea>
  )
}
