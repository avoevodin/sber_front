import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PhonesDetail() {
  const { phoneId } = useParams()
  const navigate = useNavigate()
  const [phone, setPhone] = useState({})

  const currentController = useRef(new AbortController()).current

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/phones/${phoneId}`, { signal: currentController.signal })
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer))

    return () => {
      currentController.abort()
    }
  }, [])

  const content = () => {
    if (!phone.id) {
      return <strong>Loading...</strong>
    }

    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={phone.pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{phone.name}</h5>
          <p className="card-text">{phone.phone}</p>
          <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex justify-content-center">
      {content()}
    </div>
  )
}

export default PhonesDetail
