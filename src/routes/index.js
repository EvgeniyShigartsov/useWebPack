import React from 'react'

const routes = {
  Home: {
    path: '/',
    component: React.lazy(() => import('../components/Home')),
  },
  About: {
    path: '/about',
    component: React.lazy(() => import('../components/About')),
  },
  Users: {
    path: '/users',
    component: React.lazy(() => import('../components/Users')),
  },
}

export default routes
