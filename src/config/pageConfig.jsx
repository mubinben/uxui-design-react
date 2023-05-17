import Home from "../component/Home"
import Clipboard from "../component/Clipboard"

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
    }
]

export default pages