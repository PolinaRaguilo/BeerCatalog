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
            title: action.title,
            tagline: action.tagline,
            description: action.description,
            img: action.img,
          },
        ],
      };
    default:
      return state;
  }
};

export { favoriteReducer };
