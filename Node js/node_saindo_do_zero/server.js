/* import { createServer } from  'node:http'

const server = createServer((request, response) =>  {
    response.write('hello teste')
    
    return response.end()
})

server.listen(3333) */

import { fastify } from 'fastify'

const server = fastify()

server.post('/videos', () => {
    return 'Hello World'
})

server.get('/videos', () => {
    return 'Hello World'
})

server.put('/videos', () => {
    return 'Hello World'
})

server.delete('/videos', () => {
    return 'Hello World'
})

server.listen({
    port: 3333,
})