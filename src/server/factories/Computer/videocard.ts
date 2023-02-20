import { Factory } from "miragejs";

export const videocard = Factory.extend({
  name (i) {
    return `Видеокарта ${i}`
  }
})