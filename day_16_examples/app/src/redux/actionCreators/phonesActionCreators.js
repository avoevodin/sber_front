import { DELETE_PHONE, SET_PHONES, UPDATE_PHONE } from '../types/phonesTypes'

const setPhones = (newPhones) => ({
  type: SET_PHONES,
  payload: newPhones,
})

export const setPhonesQuery = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/phones/')
  const dataFromServer = await response.json()
  dispatch(setPhones(dataFromServer))
}

const deletePhone = (id) => ({
  type: DELETE_PHONE,
  payload: id,
})

export const deletePhoneQuery = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/v1/phones/${id}`, {
    method: 'DELETE',
  })
  if (response.status === 200) {
    dispatch(deletePhone(id))
  }
}

const updatePhone = (newPhone) => ({
  type: UPDATE_PHONE,
  payload: newPhone,
})

export const updatePhoneQuery = (id, formData) => async (dispatch) => {
    const response = await fetch(`http://localhost:3000/api/v1/phones/${ .id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 200) {
      const updatedPhoneFromServer = await response.json()
      setPhone(updatedPhoneFromServer)
      dispatch(updatePhone(updatedPhoneFromServer ))
    } else {
      alert('Wrong data')
    } 
}
