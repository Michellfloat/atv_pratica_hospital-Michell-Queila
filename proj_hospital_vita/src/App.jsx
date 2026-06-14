import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Team from './pages/Team/Team'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Schedule from './pages/Schedule/Schedule'

function App() {
  

  return (
    <>
      <div className="app-container">
        {/* Componente Global de Navegação */}
        <Header />

        {/* Orquestrador de Conteúdo Dinâmico */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>

        {/* Rodapé Institucional */}
        <Footer />
      </div>
    </>
  )
}

export default App
