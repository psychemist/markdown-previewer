import { useState } from 'react'
import '../styles/Previewer.css'

export default function Previewer() {
    const [text, setText] = useState('')

    return (
        <>
            <div id="preview"></div>
        </>
    )
}
