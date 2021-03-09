const initialState = {
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.isLog,
      };

    default:
      return state;
  }
};

export { authReducer };
