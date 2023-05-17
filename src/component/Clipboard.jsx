import { useState } from 'react'
import '../style/Clipboard.css'

const Clipboard = () => {

    const [ isCopy, setIsCopy ] = useState(false)

    const text = 'Click clipboard icon to copy me'

    const handleClickCopy = () => {
        navigator.clipboard.writeText(text)
        setIsCopy(true)
    }

    return (
        <div className='container'>
            <div>
                {text}
            </div>
            <div>
                {
                    isCopy ?
                    <i class="bi bi-clipboard-check copy-icon after-copy" onClick={handleClickCopy}></i>
                    :
                    <i class="bi bi-clipboard copy-icon before-copy" onClick={handleClickCopy}></i>
                }
            </div>
        </div>
    )
}

export default Clipboard