import Home from "../component/Home"
import Clipboard from "../component/Clipboard"
import LoadingButton from "../component/LoadingButton"

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
    }
]

export default pages