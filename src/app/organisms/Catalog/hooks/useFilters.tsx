import React, { useEffect, useState } from 'react'
import { Computer } from 'features/computers/computersApi'

interface Filters {
  videocards: Set<string>;
  boards: Set<string>;
  procGens: Set<string>;
  stylings: Set<string>;
}

/*
  Получить фильтры из списка компьютеров
*/
export const useFilters = (computers: Computer[] | undefined) => {
  const [filters, setFilters] = useState<Filters>({} as Filters)

  useEffect(() => {
    if (computers) {
      const filters: Filters = {
        videocards: new Set(),
        boards: new Set(),
        procGens: new Set(),
        stylings: new Set(),
      }

      computers.forEach((computer) => {
        filters.videocards.add(computer.videocard)
        filters.procGens.add(computer.procGen)
        filters.boards.add(computer.board)
        filters.stylings.add(computer.styling)
      })
    }
  }, [computers])

  return {

  }
}