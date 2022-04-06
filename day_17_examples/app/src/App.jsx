import './App.css'
import Container from '@mui/material/Container'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Container maxWidth="md" className="container">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  </BrowserRouter>
)

export default App
