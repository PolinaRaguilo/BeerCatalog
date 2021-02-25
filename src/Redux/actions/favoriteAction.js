/* eslint-disable arrow-parens */
export const addFavorite = (id, name, tagline, description, img) => {
  return {
    type: "ADD_TO_FAVORITE",
    id,
    name,
    tagline,
    description,
    img,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: "DELETE_FROM_FAVORITE",
    id,
  };
};
