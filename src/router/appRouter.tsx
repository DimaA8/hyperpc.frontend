import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from 'app/pages/home/HomePage'
import { MainLayout } from 'app/layouts/MainLayout'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
])