require('dotenv').config()

import express from 'express'
import { createPost } from './create-post'
import { getAll } from './get-all-post'

const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/createPost', async (req: any, res: any) => {
    try {
        const newPost = await createPost({
            title: req.body.title,
            content: req.body.content
        })

        if (newPost) {
            res.status(201).send('Post was created')
        } else {
            res.status(400).send('Failed to create post')
        }
    } catch (error) {
        console.error("Error creating post:", error)
        res.status(500).send("Internal Server Error")
    }
})

app.get('/posts', async (req:any, res:any) => {
    try {
        const posts = await getAll()

        if (posts) {
            res.json(posts)
        } else {
            res.status(400).send('Failed to get posts')
        }
    } catch (error) {
        console.error('Fail to request')
        res.status(500).send('Internal server error', error)
    }
})

app.listen(3030, async () => {
    console.log('O servidor está escutando a porta 3030')
})