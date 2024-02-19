import { useState } from 'react'
import '../styles/Editor.css'

export default function Editor() {
    const [text, setText] = useState('')

    return (
        <>
            <textarea name="" id="editor" cols="30" rows="10"></textarea>
        </>
    )
}
