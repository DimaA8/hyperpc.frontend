import React from 'react'
import { Container } from '@mui/material'
import { Catalog } from 'app/organisms/Catalog'

export const CatalogComputersPage = () => {
  return (
    <Container sx={{ padding: '2rem 0' }}>
      <Catalog />
    </Container>
  )
}

export default CatalogComputersPage