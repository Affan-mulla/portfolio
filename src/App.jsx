import { Route, Routes } from "react-router-dom"
import Wrapper from "./Components/Wrapper"
import Project from "./Components/Project/Project"
import ContactMe from "./Components/Contact/ContactMe"

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route element={<Wrapper/>} path="/" />
        <Route element={<Project/>} path="/project"></Route>
        <Route element={<ContactMe/>} path="/contactme"></Route>
      </Routes>
      </main>
    </>
  )
}

export default App
