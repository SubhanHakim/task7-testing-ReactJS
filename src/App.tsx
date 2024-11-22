import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
