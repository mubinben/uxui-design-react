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
        <div className='clipboard-container'>
            <div>
                {text}
            </div>
            <div>
                {
                    isCopy ?
                    <i className="bi bi-clipboard-check clipboard-icon-copy clipboard-after-copy"
                        onClick={handleClickCopy}></i>
                    :
                    <i className="bi bi-clipboard clipboard-icon-copy clipboard-before-copy"
                        onClick={handleClickCopy}></i>
                }
            </div>
        </div>
    )
}

export default Clipboard