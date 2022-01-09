import React from 'react'

const routes = {
  Home: {
    path: '/',
    component: React.lazy(() => import('../components/Home' /* webpackChunkName: "Home" */)),
  },
  About: {
    path: '/about',
    component: React.lazy(() => import('../components/About' /* webpackChunkName: "About" */)),
  },
  Users: {
    path: '/users',
    component: React.lazy(() => import('../components/Users' /* webpackChunkName: "Users" */)),
  },
}

export default routes
