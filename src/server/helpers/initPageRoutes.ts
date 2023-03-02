import { Server } from "miragejs"
import { EndPoints } from "api/EndPoints"
import homeData from '../data/pages/home.json'

export const initPageRoutes = (server: Server) => {
  server.urlPrefix = 'https://localhost:5000/';
  server.namespace = 'api';
  server.get(EndPoints.pages.HOME, () => homeData);
}