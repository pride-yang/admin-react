import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound404 from '@/pages/error/404'

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<NotFound404 />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
