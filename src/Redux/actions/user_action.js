import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/constants";
import axios from "axios";

export const login = (email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://daw-test-api.herokuapp.com/api/login",
      { email, password },
      config
    )




    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem("userInfo", JSON.stringify(data));
    history.push("/dashboard")
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = (history) => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  history.push("/")
};