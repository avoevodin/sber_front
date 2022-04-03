import { SET_PHONES } from '../types/phonesTypes'

const setPhones = (payload) => ({
  type: SET_PHONES,
  payload,
})

const setPhonesQuery = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/phones/')
  const dataFromServer = await response.json()
  dispatch(setPhones(dataFromServer))
}
