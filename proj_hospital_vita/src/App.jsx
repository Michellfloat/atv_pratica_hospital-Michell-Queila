import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      <div className="app-container">
        {/* Componente Global de Navegação */}
        <Navbar />

        {/* Orquestrador de Conteúdo Dinâmico */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Rodapé Institucional */}
        <Footer />
      </div>
    </>
  )
}

export default App
