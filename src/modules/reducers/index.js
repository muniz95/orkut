import { combineReducers } from 'redux'

const auth = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return true
    case 'LOGOUT':
      return false
    default:
      return state
  }
}

export default combineReducers({
  auth
})