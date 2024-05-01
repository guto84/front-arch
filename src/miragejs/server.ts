import { createServer } from "miragejs"
import {faker} from '@faker-js/faker'

type User = {
  id: number
  name: string
  email: string
}

const userMock: User[] = [{
  id: faker.number.int(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
}]

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.get("https://jsonplaceholder.typicode.com/users", () => {
        return userMock
      })
    },
  })

  return server
}
