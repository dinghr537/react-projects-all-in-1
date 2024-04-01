import Login from '../page/Login'
import Article from '../page/Article'
// import Layout from '../page/Layout'
// import Board from '../page/Board'
// import About from '../page/About'
// import NotFound from '../page/NotFound'

import { createBrowserRouter, createHashRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article',
    element: <Article />
  }
])

// console.log(router)

export default router