import { useNavigate } from 'react-router-dom'

function PhonesDetailCard() {
  const navigate = useNavigate()

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={phone.pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{phone.name}</h5>
        <p className="card-text">{phone.phone}</p>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-primary mx-1"
        >
          Go back
        </button>
        <button
          type="button"
          onClick={openModal}
          className="btn btn-success mx-1"
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default PhonesDetailCard
