import { 
  Model,
  createServer
} from 'miragejs'
import { fixtures } from './fixtures'
import { factories } from './factories'
import { seeds } from './seeds'
import { EndPoints } from 'api/EndPoints'

export const server = () => {
  createServer({
    models: {
      styling: Model,
      computer: Model,
      videocard: Model,
      board: Model,
      procGen: Model
    },
    factories,
    fixtures,
    seeds(server) {
      server.createList('computer', 100)
      server.loadFixtures(
        'stylings',
        'boards',
        'videocards',
        'procGens'
      )
    },
    routes() {
      this.namespace = 'api'

      this.get(EndPoints.STOCK_PRODUCTS, (schema, request) => {
        return {
          procGens: schema.db.procGens,
          videocards: schema.db.videocards,
          boards: schema.db.boards,
          stylings: schema.db.stylings,
          computers: schema.db.computers
        }
      })
    },
  })
}