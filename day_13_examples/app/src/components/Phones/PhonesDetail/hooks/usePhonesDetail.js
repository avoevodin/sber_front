import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const usePhonesDetail = (closeModal) => {
  const { phoneId } = useParams()
  const [phone, setPhone] = useState({})

  const currentController = useRef(new AbortController()).current

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/phones/${phoneId}`, {
      signal: currentController.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer))

    return () => {
      currentController.abort()
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await fetch(`http://localhost:3000/api/v1/phones/${phoneId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.status === 200) {
      const updatedPhoneFromServer = await res.json()

      setPhone(updatedPhoneFromServer)
      e.target.reset()
      closeModal()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return {
    phone,
    submitHandler,
  }
}

export default usePhonesDetail
