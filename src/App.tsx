import { Route, Routes } from "react-router-dom"
import SkillsPage from "./pages/Skills"
import Layout from "./components/Layout"
import HomePage from "./pages/Home"
import About from "./pages/About"


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skill" element={<SkillsPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
