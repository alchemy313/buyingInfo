import { SET_LOGIN_CODE } from '../constants/auth'

const INITIAL_STATE = {
  login_code: ''
};

export default function auth (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN_CODE:
      return {
        ...state,
        login_code: action.login_code
      }
    default:
      return state
  }
}
