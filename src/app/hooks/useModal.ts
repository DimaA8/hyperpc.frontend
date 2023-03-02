import { useState } from 'react'

export const useModal = (): [boolean, () => void, () => void, () => void] => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  }

  const open = () => {
    setOpen(true);
  }

  const close = () => {
    setOpen(false);
  }

  return [isOpen, toggle, open, close];
}