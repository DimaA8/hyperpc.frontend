import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from 'app/pages/home/HomePage'
import { MainLayout } from 'app/layouts/MainLayout'
import { devRouter } from 'dev/router'

const CatalogComputerPage = React.lazy(() => import('app/pages/catalog/CatalogComputersPage'))
const CartPage = React.lazy(() => import('app/pages/cart/CartPage'))
const CartFormPage = React.lazy(() => import('app/pages/cart/CartForm'))

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'catalog',
        children: [
          {
            path: 'computers',
            element: <CatalogComputerPage />
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            element: <CartPage />,
          },
          {
            path: 'form',
            element: <CartFormPage />
          }
        ]
      }
    ],
  },
  devRouter
])