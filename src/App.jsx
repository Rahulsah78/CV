import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Resume from './Components/Resume'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/resume'} element={<Resume />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
