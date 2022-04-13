import axios from 'axios'
import { API_TOKEN } from '../../constans'
import { ADD_NEW_POST, SET_ALL_POSTS } from '../types/postTypes'

const setPosts = (payload) => ({
  type: SET_ALL_POSTS,
  payload,
})

export const loadAllPosts = (searchValue = '') => async (dispatch) => {
  const query = searchValue ? `/search/?query=${searchValue}` : ''

  // const res = await fetch(`https://api.react-learning.ru/posts${query}`, {
  //   headers: {
  //     authorization: `Bearer ${API_TOKEN}`,
  //   },
  // })
  const res = await axios.get('https://api.react-learning.ru/posts', {
    params: {
      query: searchValue,
    },
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  })

  // const dataFromAPI = await res.json()
  const dataFromAPI = res.data

  dispatch(setPosts(dataFromAPI))
}

const addNewPost = (payload) => ({
  type: ADD_NEW_POST,
  payload,
})

export const queryNewPost = (newPost) => async (dispatch) => {
  console.log(JSON.stringify(newPost))
  const res = await fetch('https://api.react-learning.ru/posts', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
  const postFromAPI = await res.json()

  dispatch(addNewPost(postFromAPI))
}
