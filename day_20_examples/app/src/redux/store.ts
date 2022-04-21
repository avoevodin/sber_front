import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
