import { Computer } from "features/computers/computersApi"
import { FiltersType } from "../components/Filters/Filters"

export const filterComputers = (computers: Computer[], filters: FiltersType): Computer[] => {
  return computers.filter((computer) => {

    if (filters.videocards.length > 0 && !filters.videocards.includes(computer.videocard)) {
      return false
    }

    if (filters.procGens.length > 0 && !filters.procGens.includes(computer.procGen)) {
      return false
    }

    if (filters.boards.length > 0 && !filters.boards.includes(computer.board)) {
      return false
    }

    if (filters.stylings.length > 0 && !filters.stylings.includes(computer.styling)) {
      return false
    }

    return true
  })
}

export const applyPagination = (computers: Computer[], page: number, countPerPage: number) => {
  return computers.slice(page * countPerPage, page * countPerPage + countPerPage)
}