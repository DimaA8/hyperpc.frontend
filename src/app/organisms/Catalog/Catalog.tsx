import React, { useState } from 'react'
import { 
  Box,
  styled
} from '@mui/material'
import { Filters } from './components/Filters'
import { CatalogProvider } from './contexts/CatalogContext'
import { Products } from './components/Products'
import { rem } from 'styles/theme/theme'
import { useGetComputersQuery } from 'features/computers/computersApi'

const drawerWidth = rem(300)

interface AppBarProps {
  open?: boolean;
}

const Aside = styled('div', {
  shouldForwardProp: (propName) => propName !== 'open',
})<{ open?: boolean}>(({ theme, open }) => ({
  width: 0,
  flexShrink: 0,
  overflow: 'hidden',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  })
}))

const Main = styled('main', {
  shouldForwardProp: (propName) => propName !== 'open',
})<{ open ?: boolean}>(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  })
}))

const Bar =  styled('div', {
  shouldForwardProp: (propName) => propName !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

export const Catalog = () => {
  const { data: computers = [] } = useGetComputersQuery();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Box>
      <CatalogProvider>
        <Bar>
          <button onClick={toggleDrawer}>Фильтры</button>
        </Bar>
        <Box display="flex">
          <Aside open={openDrawer}>
            <Filters computers={computers} />
          </Aside>
          <Main open={openDrawer}>
            <Products computers={computers} />
          </Main>
        </Box>
      </CatalogProvider>
    </Box>
  )
}