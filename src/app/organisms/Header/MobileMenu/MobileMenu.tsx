import React, { useState } from 'react'
import { 
  IconButton,
  Drawer, 
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { MobileMenuView } from './MobileMenuView';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <IconButton key="right"
        onClick={toggleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleOpen}
      >
        <IconButton
          onClick={toggleOpen}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0
          }}
        >
          <CloseIcon />
        </IconButton>
        <MobileMenuView />
      </Drawer>
    </div>
  )
}