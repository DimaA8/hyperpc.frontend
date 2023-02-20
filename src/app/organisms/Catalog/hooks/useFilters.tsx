import React, { useEffect, useState } from 'react'
import { IComputer } from 'types/computer';

interface Filters {
  videocards: Set<string>;
  boards: Set<string>;
  procGens: Set<string>;
  stylings: Set<string>;
}

/*
  Получить фильтры из списка компьютеров
*/
export const useFilters = (computers: IComputer[] | undefined) => {
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
        filters.videocards.add(computer.videocardId)
        filters.procGens.add(computer.processorId)
        filters.boards.add(computer.boardId)
        filters.stylings.add(computer.stylingId)
      })
    }
  }, [computers])

  return {

  }
}