import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'
import Header from './components/Header/Header'
import Info from './components/Info/Info'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
