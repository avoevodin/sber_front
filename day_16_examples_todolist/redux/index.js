const $buttonsWr = document.querySelector('[data-buttons]')
const $counter = document.querySelector('[data-counter]')

const myInitState = {
  counter: 0,
}

const myRootReducer = (store, action) => {
  switch (action.type) {
    case 'decrement':
      return {
        ...store,
        counter: store.counter -= 1,
      }
    case 'increment':
      return {
        ...store,
        counter: store.counter += 1,
      }
    default:
      return store
  }
}

const createStore = (rootReducer, initState) => {
  let store = initState
  const subscribers = []

  return {
    getState() {
      return store
    },
    dispatch(action) {
      store = rootReducer(store, action)
      subscribers.forEach((cb) => cb())
    },
    subscribe(cb) {
      subscribers.push(cb)
      return () => {
        const indexOfCurrentCb = subscribers.findIndex((subscriber) => subscriber === cb)
        subscribers.splice(indexOfCurrentCb, 1)
      }
    },
  }
}

const myStore = createStore(myRootReducer, myInitState)

const mySubscriber = () => {
  $counter.innerHTML = myStore.getState().counter
}
const deleteMySubscriber = myStore.subscribe(mySubscriber)

$buttonsWr.addEventListener('click', (e) => {
  switch (e.target.dataset.action) {
    case 'decrement':
      myStore.dispatch({
        type: e.target.dataset.action,
      })
      break
    case 'increment':
      myStore.dispatch({
        type: e.target.dataset.action,
      })
      break
    case 'unsubscribe':
      deleteMySubscriber()
      break

    default:
      break
  }
})
