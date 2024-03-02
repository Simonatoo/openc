import { client, server } from "./database/client"

interface Post {
    create_at?: string
    title: string
    content: string
    vote?: number
    total_comments?: number,
    comments?: Array<Comment>
}

interface Comment {
    create_at: string
    content: string
    vote: number
}

export const createPost = async (config: Post) => {
    try {
        const newPost: Post = {
            create_at: new Date().toDateString(),
            title: config.title,
            content: config.content,
            vote: 0,
            total_comments: 0,
            comments: []
        }

        // Validando se a conexão com o bando está estabelecida
        await server()

        const db = client.db('openc')
        const collection = db.collection("posts")

        // Adiciona o novo post ao banco de dados 
        await collection.insertOne(newPost)

        return newPost
        
    } catch (error) {
        console.error("Falha ao criar post ", error)
        throw error
    }
}