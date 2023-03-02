import React from 'react'
import { ReactSVG } from 'react-svg';

export interface IIcon {
  name: string;
}

interface Props {
  icon: IIcon;
}

export const Icon = ({ icon }: Props) => {
  return (
    <ReactSVG src={`/icons/${icon.name}`} />
  )
}