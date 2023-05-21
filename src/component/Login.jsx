import { useState } from 'react'
import '../style/Login.css'

const Login = () => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ isLogin, setIsLogin ] = useState(false)

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        if (username === 'root' && password === '1234') {
            setMessage('Login successfully.')
            setIsLogin(true)
        } else {
            setMessage('Your username or password invalid.')
            setIsLogin(false)
        }
    }

    return (
        <form className='login-container' onSubmit={handleSubmitLogin}>
            <div className='login-header'>Login</div>
            <div className='login-input'>
                <label>USERNAME</label>
                <input type='text' placeholder='Enter username' onChange={handleChangeUsername} />
            </div>
            <div className='login-input'>
                <label>PASSWORD</label>
                <input type='password' placeholder='Enter password' onChange={handleChangePassword} />
            </div>
            <div className={`login-message ${isLogin ? 'login-message-success' : 'login-message-failure'}`}>
                {message}
            </div>
            <div>
                <button className='login-btn' type='submit'>Login</button>
            </div>
        </form>
    )
}

export default Login