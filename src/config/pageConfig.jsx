import Home from "../component/Home"
import Clipboard from "../component/Clipboard"
import LoadingButton from "../component/LoadingButton"
import Login from "../component/Login"

const pages = [
    {
        name: 'home',
        path: '/',
        element: <Home />
    },
    {
        name: 'clipboard',
        path: '/clipboard',
        element: <Clipboard />
    },
    {
        name: 'loading button',
        path: '/loading-button',
        element: <LoadingButton />
    },
    {
        name: 'login',
        path: '/login',
        element: <Login />
    }
]

export default pages