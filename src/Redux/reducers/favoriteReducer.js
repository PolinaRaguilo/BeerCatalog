/* eslint-disable arrow-parens */
const initialState = {
  favoritesId: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.id],
      };
    case "DELETE_FROM_FAVORITE":
      return {
        ...state,
        favoritesId: [
          ...state.favoritesId.filter((item) => item !== action.id),
        ],
      };
    default:
      return state;
  }
};

export { favoriteReducer };
