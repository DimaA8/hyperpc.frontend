import React from 'react'
import {
  Box,
  styled,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Container
} from '@mui/material'
import { Link } from 'react-router-dom'

const Background = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`

interface Props {
  bgmobile: {
    src: string;
    alt: string;
  },
  bgdesktop: {
    src: string;
    alt: string;
  },
  title: string;
  lead: string;
  moreBtn: {
    text: string;
    to: string;
  }
}

export const Slide = ({ 
  bgmobile,
  bgdesktop,
  title,
  lead,
  moreBtn
}: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const height = isMobile ? 'calc(88vw + 250px)' : '42.1vw'

  return (
    <Box height={height}
      overflow="hidden"
      display="flex"
      flexDirection="column"

      sx={!isMobile ? {
        justifyContent: 'center',
        alignItems: 'start'
      }: {
        justifyContent: 'end',
        alignItems: 'center',
        paddingBottom: '12.5%'
      }}
    >
      {isMobile ? 
        <Background src={bgmobile.src} alt={bgmobile.alt} /> :
        <Background src={bgdesktop.src} alt={bgdesktop.alt} />
      }
      <Container sx={{ position: 'relative' }}>
        <Box sx={isMobile ? {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }: null}>
          <Typography variant="h1" component="h2" textTransform="uppercase" fontWeight="bold">{title}</Typography>
          <Typography variant="h2" component="p" color="muted" marginBottom={2}>{lead}</Typography>
          <Button size="large" component={Link} to={moreBtn.to}>{moreBtn.text}</Button>
        </Box>
      </Container>
    </Box>
  )
}