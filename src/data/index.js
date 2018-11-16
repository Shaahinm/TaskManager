import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const reducers = combineReducers({
//   orders: orderReducer,
//   favorites: favoriteReducer,
//   exchanges: currencyReducer
})
// const store = createStore(reducers, {}, enhancer)
const store = null

export default store
