import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import IndexRoute from './routes'
import ErrorRoute from './routes/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexRoute />,
    errorElement: <ErrorRoute />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
