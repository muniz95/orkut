import { LOGIN, LOGOUT } from '../constants'

export const login = () => {
  const action = {
    type: LOGIN
  }
  return action
}

export const logout = () => {
  const action = {
    type: LOGOUT
  }
  return action
}

export default {
  login,
  logout,
}
