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
