/* eslint-disable arrow-parens */
import BeerService from "../../Services/beerService";

const beerApi = new BeerService();

const receiveBeer = (beers) => {
  return {
    type: "BEERS/RECEIVE_BEERS",
    beers,
  };
};

const requestBeer = () => {
  return {
    type: "BEERS/REQUEST_BEERS",
  };
};

const failLoadBeer = () => {
  return {
    type: "BEERS/FAIL_LOAD",
  };
};

export const fetchBeers = () => async (dispatch) => {
  dispatch(requestBeer());
  try {
    const response = await beerApi.getWithPagination();
    dispatch(receiveBeer(Object.values(response.data)));
    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch(failLoadBeer());
  }
};
