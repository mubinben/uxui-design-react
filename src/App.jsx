import { BrowserRouter, Routes, Route } from "react-router-dom"
import pages from "./config/pageConfig"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map(page => (
            <Route path={page.path} element={page.element}/>
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App