/* eslint-disable no-underscore-dangle */
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
    <div>
      {posts.map((post) => <PostItem key={post._id} {...post} />)}
    </div>
  )
}

export default PostsList
