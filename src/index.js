import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personal from './Components/Pages/Personal'
import Contact from './Components/Pages/Contact'
import Education from './Components/Pages/Education'
import Works from './Components/Pages/Works'
import Skills from './Components/Pages/Skills'
import ScrollToTop from './Components/utils/ScrollToTop'
import Landing from './Components/Pages/Landing'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='personal' element={<Personal />} />
          <Route path='skills' element={<Skills />} />
          <Route path='works' element={<Works />} />
          {/* <Route path='education' element={<Education />} /> */}
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
