import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import NotFound from '../page/NotFound'

import { createBrowserRouter, createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id/:name',
    element: <Article />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

// console.log(router)

export default router