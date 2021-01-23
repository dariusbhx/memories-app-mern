import React from 'react'
import Post from './Post/Post'
import {Grid, circularProgress } from 'material-ui/core'
import useStyles from './styles'

import { useSelector} from 'react-redux'
const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    console.log(posts)
    return (
        <div>
            !posts.length ? <CircularProgress /> :
        </div>
    )
}

export default Posts
