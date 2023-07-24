import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ByCategoriPage from './Pages/ByCategoriPage'
import DetailsPage from './Pages/DetailsPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCategory/:categoryId" element={<ByCategoriPage />} />
        <Route path="/detailsPage/:postId" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
