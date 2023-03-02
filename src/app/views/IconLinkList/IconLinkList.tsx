import React from 'react'
import {
  Typography
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Icon, IIcon } from 'app/components/Icon'

interface Props {
  links: {
    icon: IIcon,
    href: string;
    text: string;
  }[]
}

export const IconLinkList = ({ links }: Props) => {

  const linksView = links.map((link) => (
    <SwiperSlide>
      <Link to={link.href}>
        <Icon icon={link.icon} />
        <Typography>{link.text}</Typography>
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper>
      {linksView}
    </Swiper>
  )
}