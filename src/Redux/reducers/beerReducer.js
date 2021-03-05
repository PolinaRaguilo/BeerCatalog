const initialState = {
  beers: [],
  errorMsg: null,
  errorItem: false,
  loadingItems: true,
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEERS/RECEIVE_BEERS":
      return {
        ...state,
        beers: [...state.beers, ...action.beers],
        loadingItems: false,
      };
    case "BEERS/REQUEST_BEERS":
      return {
        ...state,
        loadingItems: true,
        errorItem: false,
      };
    case "BEERS/FAIL_LOAD":
      return {
        ...state,
        errorMsg: action.err,
        errorItem: true,
        loadingItems: false,
      };
    case "BEERS/FILTRATION":
      return {
        ...state,
        beers: action.filteredList,
      };
    default:
      return state;
  }
};

export { beerReducer };
