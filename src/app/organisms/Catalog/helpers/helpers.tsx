import { IComputer, TActiveFilterIds } from "types/computer"

export const filterComputers = (computers: IComputer[], filters: TActiveFilterIds): IComputer[] => {
  return computers.filter((computer) => {

    if (filters.videocards.length > 0 && !filters.videocards.includes(computer.videocardId)) {
      return false
    }

    if (filters.processors.length > 0 && !filters.processors.includes(computer.processorId)) {
      return false
    }

    if (filters.boards.length > 0 && !filters.boards.includes(computer.boardId)) {
      return false
    }

    if (filters.stylings.length > 0 && !filters.stylings.includes(computer.stylingId)) {
      return false
    }

    return true
  })
}

export const applyPagination = (computers: IComputer[], page: number, countPerPage: number) => {
  return computers.slice(page * countPerPage, page * countPerPage + countPerPage)
}