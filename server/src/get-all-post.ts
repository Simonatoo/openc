import { client, server } from "./database/client"

export const getAll = async () => {
    await server()

    const db = client.db('openc')
    const collection = db.collection("posts")

    const posts = await collection.find({}).toArray()

    return posts
}