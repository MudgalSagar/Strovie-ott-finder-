import React from 'react'
import MovieSearch from './pages/MovieSearch'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './pages/About'
import Contact from "./pages/Contact"
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <div>
      
      <Router>
      <Header/>
        <Routes>
          <Route path='/about' element = {<About/> }/>
          <Route path = '/' element = {<MovieSearch/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/policy' element = {<PrivacyPolicy/>} />
          <Route path = '/terms&condition' element = {<Terms/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
