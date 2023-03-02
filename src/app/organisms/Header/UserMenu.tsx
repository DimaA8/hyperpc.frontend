import React from 'react'
import { 
  Popper,
  IconButton,
  Fade,
  Badge
} from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import { useState } from 'react'
import { MouseEvent } from 'react'
import { UserMenuView } from './UserMenuView'
import { useAppSelector } from 'app/hooks'

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const open = Boolean(anchorEl)
  const id = open ? 'usermenu' : undefined
  const productCount = useAppSelector((state) => (state.cart.productIds.length))

  const toggleOpen = (event: MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <>
      <IconButton aria-describedby={id} aria-label="basket" onClick={toggleOpen}>
        {productCount ? 
          <Badge badgeContent={productCount} color="secondary">
            <WorkOutlineIcon />
          </Badge> : 
          <WorkOutlineIcon />
        }
      </IconButton>
      <Popper 
        id={id}
        open={open}
        disablePortal={false}
        transition
        placement="bottom-end"
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