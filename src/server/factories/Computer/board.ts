import { Factory } from "miragejs";

export const board = Factory.extend({
  name(i) {
    return `Мат. плата ${i}`
  }
})