import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../../Modal/Modal'

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

    const editHadler = (e) => {
      console.log(e)
    }

    return (
      <>
        <div className="card" style={{ width: '18rem' }}>
          <img src={phone.pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.name}</h5>
            <p className="card-text">{phone.phone}</p>
            <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
            <button type="button" onClick={editHadler} className="btn btn-success mx-1">Edit</button>
          </div>
        </div>
        <Modal>
          <form className="d-flex flex-column align-items-center">
            <div className="mb-3">
              <input name="name" placeholder="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <input name="phone" placeholder="phone" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <input name="pic" placeholder="image link" type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal>
      </>
    )
  }

  return (
    <div className="d-flex justify-content-center">
      {content()}
    </div>
  )
}

export default PhonesDetail
