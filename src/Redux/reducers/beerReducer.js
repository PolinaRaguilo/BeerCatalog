const initialState = {
  beers: [],
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEERS/RECEIVE_BEERS":
      return {
        ...state,
        beers: action.beers,
      };
    case "BEERS/REQUEST_BEERS":
      return {
        ...state,
      };
    case "BEERS/FAIL_LOAD":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { beerReducer };
