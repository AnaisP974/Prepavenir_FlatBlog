import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
