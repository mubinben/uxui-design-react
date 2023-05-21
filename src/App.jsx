import { BrowserRouter, Routes, Route } from "react-router-dom"
import pages from "./config/pageConfig"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.element} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App