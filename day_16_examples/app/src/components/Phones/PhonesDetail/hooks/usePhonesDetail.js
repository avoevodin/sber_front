import { useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const usePhonesDetail = (closeModal) => {
  const { phoneId } = useParams()
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState({})

  const currentController = useRef(new AbortController()).current

  useLayoutEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/api/v1/phones/${phoneId}`, {
      signal: currentController.signal,
    })
      .then((response) => response.json())
      .then((dataFromServer) => setPhone(dataFromServer))
      .finally(() => setLoading(false))

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
    loading,
    submitHandler,
  }
}

export default usePhonesDetail
