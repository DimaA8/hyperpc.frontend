import { faker } from '@faker-js/faker'

import { Factory } from "miragejs";

const boards = [
  { id: 1, name: 'Intel B660' },
  { id: 2, name: 'Intel Z690' },
  { id: 3, name: 'Intel Z790' },
  { id: 4, name: 'AMD B650' },
  { id: 5, name: 'AMD X670' },
]

const procGens = [
  { id: 1, name: 'Intel Core 12th' },
  { id: 2, name: 'Intel Core 13th' },
  { id: 3, name: 'AMD Ryzen 7000' },
]

const stylings = [
  { id: 1, name: 'LUMEN' },
  { id: 2, name: 'DYNAMIC' },
  { id: 3, name: 'NANO' },
  { id: 4, name: 'CYBER' },
  { id: 5, name: 'VOLT' },
  { id: 6, name: 'LUMEN PRO' },
  { id: 7, name: 'GENESIS' },
]

const videocards = [
  { id: 1, name: 'GeForce RTX 3060' },
  { id: 2, name: 'GeForce RTX 3060 Ti' },
  { id: 3, name: 'GeForce RTX 3070 Ti' },
  { id: 4, name: 'GeForce RTX 3080' },
  { id: 5, name: 'GeForce RTX 3080 Ti' },
  { id: 6, name: 'GeForce RTX 4070 Ti' },
  { id: 7, name: 'GeForce RTX 4080' },
  { id: 8, name: 'GeForce RTX 4090' },
]

export const computer = Factory.extend({
  image: {
    src: '/images/computers/hyperpc-lumen-plus-platinum-silver-upd-450x450.jpg',
    alt: 'hyperpc-lumen-plus-platinum-silver-upd-450x450'
  },
  name: 'HYPERPC LUMEN PRO',
  price() {
    return faker.commerce.price(70_000, 500_000)
  },
  /*
    0 - in stock
    1 - limited
    2 - out stock
  */
  stock() {
    return faker.datatype.number({ min: 0, max: 2 })
  },
  reviewsCount() {
    return faker.datatype.number({ min: 0, max: 100 })
  },
  board() {
    const id = faker.datatype.number({ min: 0, max: boards.length - 1 })
    return boards[id].name
  },
  videocard() {
    const id = faker.datatype.number({ min: 0, max: videocards.length - 1 })
    return videocards[id].name
  },
  procGen() {
    const id = faker.datatype.number({ min: 0, max: procGens.length - 1 })
    return procGens[id].name
  },
  styling() {
    const id = faker.datatype.number({ min: 0, max: stylings.length - 1 })
    return stylings[id].name
  }
})