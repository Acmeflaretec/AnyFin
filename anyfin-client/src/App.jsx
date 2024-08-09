import { Route, Routes } from 'react-router-dom'
import './App.css'
import Services from './pages/Services'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactIcons from './components/ContactIcons'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'

function App() {

  return (
   <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/servicedetails" element={<ServiceDetails />} />
     </Routes>
     <ContactIcons/>
     <Footer/>
   </> 
  )
}

export default App
