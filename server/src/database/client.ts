require('dotenv').config()

import { MongoClient } from "mongodb"

const uri = process.env.MONGO_URI
export const client = new MongoClient(uri ?? "")

export const server = async () => {
    try {
       await client.connect() 
    } catch (err) {
       console.error(err) 
    }
}