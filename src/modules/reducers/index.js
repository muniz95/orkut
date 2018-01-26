import { LOGIN, LOGOUT } from '../constants'
import { combineReducers } from 'redux'

const auth = (state = true, action) => {
  switch (action.type) {
    case LOGIN:
      return true
    case LOGOUT:
      return false
    default:
      return state
  }
}

export default combineReducers({
  auth
})