import { createServer } from  'node:http'

const server = createServer((request, response) =>  {
    response.write('hello teste')
    
    return response.end()
})

server.listen(3333)

