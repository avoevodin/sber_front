const initState = {
  todos: [],
}

export const LOCAL_STORAGE_KEY = 'todos'

const getInitState = () => {
  const dataFromLS = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  return dataFromLS || initState
}

export default getInitState
