import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx' // Without lazy loading
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

// Lazy loading
const About = lazy(() => waiting(1000).then(() => import('./components/About.jsx')))
const Contact = lazy(() => waiting(1000).then(() => import('./components/Contact.jsx')))

// React.lazy() - It is a function, which import components dynamically

// Suspanse - When a component is loading, it may take some time. During this time, Suspense is used to handle the UI.
const waiting = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)