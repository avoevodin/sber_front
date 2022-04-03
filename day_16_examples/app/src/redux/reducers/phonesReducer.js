import { DELETE_PHONE, SET_PHONES, UPDATE_PHONE } from '../types/phonesTypes'

// eslint-disable-next-line default-param-last
const phonesReducer = (store = [], action) => {
  switch (action.type) {
    case SET_PHONES:
      return action.payload
    case DELETE_PHONE:
      return store.filter((phone) => phone.id !== action.payload.id)
    case UPDATE_PHONE:
      return store.map((phone) => {
        if (phone.id === action.payload.id) {
          return action.payload
        }
      })

    default:
      return store
  }
}

export default phonesReducer
