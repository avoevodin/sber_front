import { API_TOKEN } from '../../constans'
import { SET_ALL_POSTS } from '../types/postTypes'

const setPosts = (payload) => ({
  type: SET_ALL_POSTS,
  payload,
})

export const loadAllPosts = () => async (dispatch) => {
  const res = await fetch('https://api.react-learning.ru/posts', {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  })
  const dataFromAPI = await res.json()

  dispatch(setPosts(dataFromAPI))
}

export const addNewPost = () => async (dispatch) => {
  console.log(dispatch)
}
