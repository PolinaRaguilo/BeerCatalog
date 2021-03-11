const initialState = {
  beers: [],
  errorMsg: null,
  isLoading: true,
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEERS/SUCCESS_BEERS":
      return {
        ...state,
        beers: [...state.beers, ...action.beers],
        isLoading: false,
      };
    case "BEERS/REQUEST_BEERS":
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      };
    case "BEERS/FAIL_LOAD":
      return {
        ...state,
        errorMsg: action.err,
        isLoading: false,
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
