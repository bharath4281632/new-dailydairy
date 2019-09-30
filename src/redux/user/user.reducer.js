const INIT_STATE = {};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
