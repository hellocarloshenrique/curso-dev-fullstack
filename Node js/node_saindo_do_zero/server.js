import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database =  new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    
    database.create({
        // title: title,
        // description: description,
        // duration: duration,
        //usando short syntax
        title,
        description,
        durations,
    })
    
    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Hello Worldmesmo'
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