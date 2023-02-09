import { 
  Model,
  createServer
} from 'miragejs'
import { fixtures } from './fixtures'
import { factories } from './factories'
import { EndPoints } from 'api'

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
      this.urlPrefix = 'https://localhost:5000/'
      this.namespace = 'api'

      this.get(EndPoints.COMPUTERS, (schema, request) => {
        return schema.db.computers
      })

      this.urlPrefix = 'http://localhost:3000/'
      this.namespace = '/'
      this.passthrough()
    },
  })
}