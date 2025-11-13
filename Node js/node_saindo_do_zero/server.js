import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database =  new DatabaseMemory()

server.post('/videos', () => {
    database.create({
        title: 'Video 01',
        description: 'Este e o video 01',
        duration: 180,
    })
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