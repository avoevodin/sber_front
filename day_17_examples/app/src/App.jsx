import './App.css'
import Container from '@mui/material/Container'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import PostForm from './components/PostForm/PostForm'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Container maxWidth="md" className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/postform" element={<PostForm />} />
      </Routes>
    </Container>
  </BrowserRouter>
)

export default App
