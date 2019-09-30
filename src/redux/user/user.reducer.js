import { UserActionTypes } from "./user.types";
import { currentUser } from "../../firebase/auth.firebase";

const INIT_STATE = {
  currentUser: null,
  isAnonymous: true
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      // console.log(action.payload);
      return { ...state, currentUser: action.payload };
    case UserActionTypes.SET_ANONYMOUS:
      return { ...state, isAnonymous: action.payload };
    default:
      return state;
  }
};

export default userReducer;
