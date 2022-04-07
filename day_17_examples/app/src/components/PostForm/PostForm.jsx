import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { queryNewPost } from '../../redux/actions/postAC'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(queryNewPost({
      title, text, image, tags: tags.split(',').map((el) => el.trim()),
    }))
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Text"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Tags"
          variant="outlined"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <Button type="submit" variant="outlined">Create post</Button>
    </Box>
  )
}

export default PostForm
