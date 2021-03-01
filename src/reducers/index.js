import { combineReducers } from 'redux'
import productsReducer from './products'
import rootReducer from './rootReducer'

const productRed = combineReducers({
  productsReducer,
  rootReducer
})

export default productRed;