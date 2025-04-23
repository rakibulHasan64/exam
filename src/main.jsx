import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import AllLouts from './componet/outs/AllLouts.jsx'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './datas/Errorpage.jsx'
import { Loadinge } from './componet/home/Loadinge.jsx'

import Bloge from './componet/blog/Bloge.JSX'
const AllHomeLayout = lazy(() => import('./componet/alllayou/AllHomeLayout.jsx'))
const DetailsPage = lazy(() => import('./componet/home/DetailsPage.jsx'))
const LocalData = lazy(() => import('./datas/LocalData.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllLouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loadinge />}>
            <AllHomeLayout />
          </Suspense>
        ),
        loader: () => fetch('/data.json'),
      },
      {
        path: '/detlis/:id',
        element: (
          <Suspense fallback={<Loadinge />}>
            <DetailsPage />
          </Suspense>
        ),
        loader: () => fetch('/data.json'),
      
      },
     

        
      {
        path: "/404",
        errorElement: <Error />
      },

      {
        path: '/data',
        element: (
          <Suspense fallback={<Loadinge />}>
            <LocalData />
          </Suspense>
        ),
      },
    

      {
        path: "/blog",
        element: <Bloge />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loadinge />}>
      <RouterProvider router={router} />
    </Suspense>
    <ToastContainer />
  </StrictMode>
)
