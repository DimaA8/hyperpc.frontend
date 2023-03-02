import { Server } from "miragejs/server"
import { createStyles } from "./createStylings"

export const seeds = (server: Server) => {
  createStyles(server)
}