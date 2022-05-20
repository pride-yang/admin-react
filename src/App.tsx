import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const NotFound404 = React.lazy(() => import('@/pages/error/404'))
const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App
