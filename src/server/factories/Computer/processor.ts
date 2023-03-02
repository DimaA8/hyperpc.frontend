import { Factory } from "miragejs";

export const processor = Factory.extend({
  name(i) {
    return `Процессор ${i}`
  }
})