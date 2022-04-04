import { useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneQuery, updatePhoneQuery } from '../../../../redux/actionCreators/phonesActionCreators'

const usePhonesDetail = (closeModal) => {
  const { phoneId } = useParams()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const currentController = useRef(new AbortController()).current
  console.log(phoneId)
  const phone = useSelector((store) => store.phones.find((el) => el.id === +phoneId)) || {}
  console.log(phone)
  useLayoutEffect(() => {
    dispatch(getPhoneQuery(phoneId, currentController.signal, setLoading))

    return () => {
      currentController.abort()
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(updatePhoneQuery(phoneId, formData, closeModal))
  }

  return {
    phone,
    loading,
    submitHandler,
  }
}

export default usePhonesDetail
