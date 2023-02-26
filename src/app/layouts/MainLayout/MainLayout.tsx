import React, { Suspense } from 'react'
import { LinearProgress } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from 'app/organisms/Header'
import { Footer } from 'app/components/Footer'

export const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Content */}
      <Suspense fallback={<LinearProgress />}>
        <Outlet/>
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  )
}