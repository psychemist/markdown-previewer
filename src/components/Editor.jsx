import { useEffect, useState } from 'react'
import '../styles/Editor.css'

export default function Editor() {
    const [text, setText] = useState('')

    useEffect(

    )

    return (
        <>
            <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
        </>
    )
}
