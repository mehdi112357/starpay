import { SET_USER_INFO } from "./authenticationConstants";

const initialState = {
  userInformation: {
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    logged: false
  },
};
const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInformation: action.payload.data,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
