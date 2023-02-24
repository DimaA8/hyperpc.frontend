import { faker } from '@faker-js/faker'
import { Factory } from "miragejs";
import { IComputer } from 'types/computer';

export const computer = Factory.extend<IComputer>({
  id(n) {
    return ''+n;
  },
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
  rating() {
    return faker.datatype.number({ min: 0, max: 5 })
  },
  reviewsCount() {
    return faker.datatype.number({ min: 0, max: 100 })
  },
  videocardId() {
    return String(Math.floor(Math.random() * 10) + 1);
  },
  processorId() {
    return String(Math.floor(Math.random() * 10) + 1);
  },
  stylingId() {
    return String(Math.floor(Math.random() * 10) + 1);
  },
  boardId() {
    return String(Math.floor(Math.random() * 10) + 1);
  },
})