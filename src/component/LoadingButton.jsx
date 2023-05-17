import { useState } from 'react'
import '../style/LoadingButton.css'

const LoadingButton = () => {

    const [ isLoading, setIsLoading ] = useState(false)

    const handleClickButton = () => {
        setIsLoading(true)
        resetLoading()
    }

    const resetLoading = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000) 
    }

    return (
        <button className='loading-btn' onClick={handleClickButton}>
            {
                isLoading ?
                <div className='loading-circle'></div>
                :
                <span className='loading-text'>Loading</span>
            }
        </button>
    )
}

export default LoadingButton