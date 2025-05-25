import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"

import "./css/App.css"
import Navbar from "./components/Navbar"
import TitleCards from "./components/TitleCards"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {

  return (
    <MovieProvider>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
