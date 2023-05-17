import { useNavigate } from "react-router-dom"
import pages from "../config/pageConfig"
import '../style/Home.css'

const Home = () => {

  const navigate = useNavigate()

  return (
    <ul>
        {
            pages.filter(page => {
                return page.name !== 'home'
            })
            .map(page => (
                <li className="component-name" onClick={() => navigate(page.path)}>
                  {page.name}
                </li>
            ))
        }
    </ul>
  )
}

export default Home