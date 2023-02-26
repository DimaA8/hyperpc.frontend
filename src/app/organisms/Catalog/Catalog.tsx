import React, { useEffect, useMemo, useState } from 'react'
import { 
  Box,
  Button,
  styled,
  CircularProgress
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Filters } from './components/Filters'
import { Products } from './components/Products'
import { rem } from 'styles/theme/theme'
import { useGetCatalogQuery } from 'features/catalog/catalogApi'
import { useAppDispatch } from 'app/hooks';
import { reset as resetCatalog } from './feature/catalogSlice';

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
  width: '100%',
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
  marginBottom: '1rem',
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
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetCatalogQuery();
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    dispatch(resetCatalog());
  })

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const filtersView = useMemo(() => {
    return (isSuccess ? <Filters filters={data.filters} /> : null)
  }, [isSuccess, data]);

  return (
    <Box>
      <Bar>
        <Button 
          onClick={toggleDrawer} 
          variant="text" 
          startIcon={<MenuIcon />}
        >
          Фильтры
        </Button>
      </Bar>
      {isLoading ? <CircularProgress /> : <></>}
      {isSuccess ? (
        <Box display="flex">
          <Aside open={openDrawer}>
            {filtersView}
          </Aside>
          <Main open={openDrawer}>
            <Products computers={data.computers} />
          </Main>
        </Box>
      ) : <></>
      }
    </Box>
  )
}