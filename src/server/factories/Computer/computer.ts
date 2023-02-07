import { faker } from '@faker-js/faker'

import { Factory } from "miragejs";

export const computer = Factory.extend({
  image: {
    src: '/images/hyperpc-lumen-plus-platinum-silver-upd-450x450.jpg',
    alt: 'hyperpc-lumen-plus-platinum-silver-upd-450x450'
  },
  name: 'HYPERPC LUMEN PRO',
  price () {
    return faker.commerce.price(70_000, 500_000)
  },
  /*
    0 - in stock
    1 - limited
    2 - out stock
  */
  stock () {
    return faker.datatype.number({ min: 0, max: 2 })
  },
  reviewsCount() {
    return faker.datatype.number({ min: 0, max: 100 })
  }
})