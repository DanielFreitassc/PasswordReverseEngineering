import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './screens/Home'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'

const router = createBrowserRouter([
  {
    path:"/",
    element:
    (
    <div>
      <Header/>
      <Home/>
    </div>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyles/>
  </React.StrictMode>
)
