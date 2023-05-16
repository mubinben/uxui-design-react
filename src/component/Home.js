import pages from "../config/pageConfig"

const Home = () => {
  return (
    <ul>
        {
            pages.filter(page => {
                return page.name !== 'home'
            })
            .map(page => (
                <li>{page.name}</li>
            ))
        }
    </ul>
  )
}

export default Home