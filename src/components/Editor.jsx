import { useEffect, useState } from 'react'
import '../styles/Editor.css'

export default function Editor() {
    const [text, setText] = useState('')

    return (
        <>
            <textarea value={text} name="editor" id="editor" cols="30" rows="10" placeholder="New text"></textarea>
        </>
    )
}
