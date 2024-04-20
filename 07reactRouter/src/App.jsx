import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
