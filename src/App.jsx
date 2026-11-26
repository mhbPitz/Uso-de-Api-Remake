import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import PokemonPage from './pages/PokemonPage.jsx'
import DbzPage from './pages/DbzPage.jsx'
import OmdbPage from './pages/OmdbPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pokemon' element={<PokemonPage />}/>
        <Route path='/dbz' element={<DbzPage />} />
        <Route path='/omdb' element={<OmdbPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
