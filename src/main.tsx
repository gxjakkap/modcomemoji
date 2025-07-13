import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './routes/home.tsx'
import All from './routes/hidden/all.tsx'
import ErrorPage from './routes/error.tsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/_modder/all",
    element: <All />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
