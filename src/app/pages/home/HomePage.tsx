import React from 'react'
import {
  Container,
  CircularProgress
} from '@mui/material'
import { Slider } from 'app/views/Slider'
import { IconLinkList } from 'app/views/IconLinkList'
import { usePageData } from 'app/hooks'

export const HomePage = () => {
  const [data] = usePageData('HOME');

  if (data) {
    return (
      <>
        <Slider />
        <Container maxWidth="lg">
          <IconLinkList links={data.iconLinkList} />
        </Container>
      </>
    )
  } else {
    return <CircularProgress />
  }
  
}