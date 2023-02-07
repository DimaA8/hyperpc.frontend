import { Server } from "miragejs"

const stylings = [
  {
    name: ''
  }
]

export const createStyles = (server: Server) => {
  stylings.forEach((styling) => {
    server.create('styling', {
    })
  })
}