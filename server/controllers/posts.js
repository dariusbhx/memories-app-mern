//Create all handlers for routes
import PostMessage from '../models/postMessage.js'
import express from 'express'
const router = express.Router()

export const getPosts =  async (req,res) => {
    try {
        const postMessages =  await PostMessage.find()
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req,res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.messages})
    }
}

export const updatePost = async (req,res) => {
    const { id: _id } = req.params // grabs the id from the router
    const post = req.body
    if(!mongoose.Types.Object.Id.isValid(_id)) return res.status(404).send('no post witht that it')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true})

    res.json(updatedPost)
}