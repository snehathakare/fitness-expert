import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  )
}

export default App