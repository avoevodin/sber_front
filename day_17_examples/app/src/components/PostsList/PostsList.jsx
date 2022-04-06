/* eslint-disable no-underscore-dangle */
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllPosts } from '../../redux/actions/postAC'
import PostItem from '../PostItem/PostItem'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((store) => store.posts)

  useEffect(() => {
    dispatch(loadAllPosts())
  }, [])

  if (!posts.length) return (<div>Posts list is empty</div>)

  return (
    <Grid container spacing={2} justifyContent="center">
      {posts.map((post) => <PostItem key={post._id} {...post} />)}
    </Grid>
  )
}

export default PostsList
