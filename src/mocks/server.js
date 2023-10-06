// https://mswjs.io/docs/getting-started/mocks/rest-api
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
