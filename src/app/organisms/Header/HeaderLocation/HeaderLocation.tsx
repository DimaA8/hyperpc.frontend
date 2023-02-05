import React, { MouseEvent, useState } from 'react'
import {
  Button,
  Popper,
  Fade
} from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Location } from 'app/organisms/Location'

export const HeaderLocation = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const toggleOpen = (event: MouseEvent) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <>
      <Button 
        variant="text" 
        startIcon={<NearMeIcon />}
        onClick={toggleOpen}
      >
        Чебоксары
      </Button>
      <Popper
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        {({ TransitionProps }) => (
        <Fade
          {...TransitionProps}
        >
          <Location />
        </Fade>
        )}
      </Popper>
    </>
  )
}