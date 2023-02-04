import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'app/organisms/Header'
import { Footer } from 'app/components/Footer'

export const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Content */}
      <Outlet/>

      {/* Footer */}
      <Footer />
    </div>
  )
}