import { Factory } from "miragejs";

export const styling = Factory.extend({
  name (i) {
    return `${i}`
  }
})