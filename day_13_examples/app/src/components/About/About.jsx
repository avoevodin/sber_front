import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, incidunt.</p>
      <button type="button" onClick={() => { navigate(1) }} className="btn btn-success">Forward</button>
    </>
  )
}

export default About
