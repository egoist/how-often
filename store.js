import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const finalCreateStore = applyMiddleware(
    thunk
)(createStore)
const store = finalCreateStore(rootReducer)

function configureStore () {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore()
