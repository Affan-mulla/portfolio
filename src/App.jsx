import { Route, Routes } from "react-router-dom"
import Wrapper from "./Components/Wrapper"
import Project from "./Components/Project/Project"

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route element={<Wrapper/>} path="/" />
        <Route element={<Project/>} path="/project"></Route>
      </Routes>
      </main>
    </>
  )
}

export default App
