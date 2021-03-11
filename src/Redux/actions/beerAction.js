/* eslint-disable arrow-parens */
import BeerService from "../../Services/beerService";

const beerApi = new BeerService();

const receiveBeer = (beers) => {
  return {
    type: "BEERS/SUCCESS_BEERS",
    beers,
  };
};

const requestBeer = () => {
  return {
    type: "BEERS/REQUEST_BEERS",
  };
};

const failLoadBeer = (err) => {
  return {
    type: "BEERS/FAIL_LOAD",
    err,
  };
};

const pagesOfBeer = [];

export const fetchBeers = (page) => async (dispatch) => {
  dispatch(requestBeer());
  let pageToLoad;
  const isInclude = pagesOfBeer.includes(page);
  if (isInclude === false) {
    pagesOfBeer.push(page);
    pageToLoad = page;
  } else {
    const lastPage = pagesOfBeer[Number(pagesOfBeer.length - 1)];
    pagesOfBeer.push(lastPage + 1);
    pageToLoad = pagesOfBeer[Number(pagesOfBeer.length - 1)];
  }
  try {
    const response = await beerApi.getWithPagination(pageToLoad);
    dispatch(receiveBeer(Object.values(response.data)));
  } catch (error) {
    dispatch(failLoadBeer(error.message));
  }
};

export const filterBeers = (alcoholFilter, ibuFilter, ebcFilter, data) => {
  let filteredList;
  if (alcoholFilter === 0 && ibuFilter === 0 && ebcFilter === 0) {
    filteredList = data;
  } else if (alcoholFilter !== 0 && ibuFilter === 0 && ebcFilter === 0) {
    filteredList = data.filter((item) => item.abv === alcoholFilter);
  } else if (alcoholFilter === 0 && ibuFilter !== 0 && ebcFilter === 0) {
    filteredList = data.filter((item) => item.ibu === ibuFilter);
  } else if (alcoholFilter === 0 && ibuFilter === 0 && ebcFilter !== 0) {
    filteredList = data.filter((item) => item.ebc === ebcFilter);
  } else if (alcoholFilter !== 0 && ibuFilter !== 0 && ebcFilter === 0) {
    filteredList = data
      .filter((item) => item.abv === alcoholFilter)
      .filter((item) => item.ibu === ibuFilter);
  } else if (alcoholFilter !== 0 && ibuFilter === 0 && ebcFilter !== 0) {
    filteredList = data
      .filter((item) => item.abv === alcoholFilter)
      .filter((item) => item.ebc === ebcFilter);
  } else if (alcoholFilter === 0 && ibuFilter !== 0 && ebcFilter !== 0) {
    filteredList = data
      .filter((item) => item.ibu === ibuFilter)
      .filter((item) => item.ebc === ebcFilter);
  }
  return {
    type: "BEERS/FILTRATION",
    filteredList,
  };
};
