/* eslint-disable arrow-parens */
const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            id: action.id,
            name: action.name,
            tagline: action.tagline,
            description: action.description,
            img: action.img,
          },
        ],
      };
    case "DELETE_FROM_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export { favoriteReducer };
