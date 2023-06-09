import { Model, createServer, belongsTo } from "miragejs";
import { fixtures } from "./fixtures";
import { factories } from "./factories";
import { EndPoints } from "api/EndPoints";
import { IComputer, IFilters } from "types/computer";
import { initPageRoutes } from "./helpers/initPageRoutes";

export const server = (environment: string = "development") => {
  const server = createServer({
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
      processor: Model,
    },
    factories,
    fixtures,
    seeds(server) {
      server.createList("videocard", 10);
      server.createList("processor", 10);
      server.createList("board", 10);
      server.createList("styling", 10);
      server.createList("computer", 10);
    },
    routes() {
      this.urlPrefix = "https://localhost:5000/";
      this.namespace = "api";

      this.get(EndPoints.CATALOG, (schema, request) => {
        // Получить фильтры
        const filters: IFilters = {
          videocards: schema.db.videocards,
          boards: schema.db.boards,
          processors: schema.db.processors,
          stylings: schema.db.stylings,
        };

        return {
          computers: schema.db.computers,
          filters,
        };
      });

      this.post(
        EndPoints.ORDER,
        () => {
          return {
            status: "success",
          };
        },
        {
          timing: 2000,
        }
      );

      this.urlPrefix = "/";
      this.namespace = "/";
      this.passthrough();
    },
  });

  initPageRoutes(server);

  return server;
};
