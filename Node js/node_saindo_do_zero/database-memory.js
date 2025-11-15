import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data, 
                //Aqui eu usei spread operator pois estou pegando
                //todas as propriedades do objeto de uma vez so.
            }
        })
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id, video)
    }
}