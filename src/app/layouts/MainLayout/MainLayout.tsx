import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'app/organisms/Header'

export const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Content */}
      <Outlet/>

      {/* Footer */}
    </div>
  )
}