import '../styles/Previewer.css'

export default function Previewer({ text }) {
  const dirty = marked.parse(text)
  const clean = DOMPurify.sanitize(dirty);

  return (
    <div id="preview">
      {clean}
    </div>
  )
}
