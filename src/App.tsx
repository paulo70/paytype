import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './Pages/Movies'
import Details from './Pages/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;