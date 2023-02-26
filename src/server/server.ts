import { 
  Model,
  createServer,
  belongsTo,
} from 'miragejs'
import { fixtures } from './fixtures'
import { factories } from './factories'
import { EndPoints } from 'api/EndPoints'
import { IComputer, IFilters } from 'types/computer'

export const server = (environment: string = 'development') => {
  return createServer({
    environment,
    models: {
      computer: Model.extend({
        videocard: belongsTo(),
        styling: belongsTo(),
        board: belongsTo(),
        processor: belongsTo(),
      }),
      styling: Model,
      videocard: Model,
      board: Model,
      processor: Model
    },
    factories,
    fixtures,
    seeds(server) {
      server.createList('videocard', 10)
      server.createList('processor', 10)
      server.createList('board', 10)
      server.createList('styling', 10)
      server.createList('computer', 10)
    },
    routes() {
      this.urlPrefix = 'https://localhost:5000/'
      this.namespace = 'api'

      this.get(EndPoints.CATALOG, (schema, request) => {
        // Получить фильтры
        const filters: IFilters = {
          videocards: schema.db.videocards,
          boards: schema.db.boards,
          processors: schema.db.processors,
          stylings: schema.db.stylings
        };

        return { 
          computers: schema.db.computers, 
          filters 
        }
      })

      this.urlPrefix = 'http://localhost:3000/'
      this.namespace = '/'
      this.passthrough()
    },
  })
}