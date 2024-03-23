import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'

function App() {
  
  return (
    <main className="main" >
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
