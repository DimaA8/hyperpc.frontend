import React from 'react'
import { 
  Popper,
  IconButton,
  Fade
} from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import { useState } from 'react'
import { MouseEvent } from 'react'
import { UserMenuView } from './UserMenuView'

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const open = Boolean(anchorEl)
  const id = open ? 'usermenu' : undefined

  const toggleOpen = (event: MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <>
      <IconButton aria-describedby={id} aria-label="basket" onClick={toggleOpen}>
        <WorkOutlineIcon />
      </IconButton>
      <Popper 
        id={id}
        open={open}
        disablePortal={false}
        transition
        anchorEl={anchorEl}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <div>
              <UserMenuView toggleOpen={toggleOpen} />
            </div>
          </Fade>
        )}
      </Popper>
    </>
  )
}