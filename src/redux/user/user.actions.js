import { UserActionTypes } from "./user.types";

export const setCurrentUser = userInfo => {
  return { type: UserActionTypes.SET_CURRENT_USER, payload: userInfo };
};

export const setAnonymous = state => {
  return { type: UserActionTypes.SET_ANONYMOUS, payload: state };
};
