/* eslint-disable arrow-parens */
export const addFavorite = (id) => {
  return {
    type: "ADD_TO_FAVORITE",
    id,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: "DELETE_FROM_FAVORITE",
    id,
  };
};
