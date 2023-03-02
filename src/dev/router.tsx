import { ComponentsPage } from "./pages/ComponentsPage"
import { DevPage } from "./pages/DevPage"

export const devRouter = process.env.NODE_ENV !== 'production' ? {
  path: '/dev',
  element: <DevPage />,
  children: [
    {
      path: 'components',
      element: <ComponentsPage />
    }
  ]
} : {}