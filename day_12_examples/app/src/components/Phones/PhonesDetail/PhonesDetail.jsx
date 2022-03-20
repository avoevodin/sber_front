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
      <>
        <div>
          Name:
          {' '}
          {phone.name}
        </div>
        <div>
          Phone:
          {' '}
          {phone.phone}
        </div>
        <div>
          Email:
          {' '}
          {phone.email}
        </div>
        <button type="button" onClick={() => { navigate(-1) }} className="btn btn-danger">Back</button>
      </>
    )
  }

  return (
    <div>
      {content()}
    </div>
  )
}

export default PhonesDetail
