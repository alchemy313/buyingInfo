import {
  SET_LOGIN_CODE,
} from '../constants/auth'

export const setLoginCode = (login_code) => {
  console.log(login_code)

  return {
    type: SET_LOGIN_CODE,
    login_code
  }
};
