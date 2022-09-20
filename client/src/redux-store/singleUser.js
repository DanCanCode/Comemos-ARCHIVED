import axios from "axios";

// ACTION TYPES
const SET_SINGLE_USER = "SET_SINGLE_USER";

// ACTION CREATORS
const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user,
  };
};

// THUNKS
export const fetchSingleUser = (email) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/users/${email}`);
    dispatch(setSingleUser(data));
  };
};

export default function singleUserReducer(state = [], action) {
  switch (action.type) {
    case SET_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
}
