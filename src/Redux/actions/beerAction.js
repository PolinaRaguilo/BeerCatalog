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

const failLoadBeer = (err) => {
  return {
    type: "BEERS/FAIL_LOAD",
    err,
  };
};

const pagesOfBeer = [];

export const fetchBeers = (page) => async (dispatch) => {
  dispatch(requestBeer());

  try {
    const isInclude = pagesOfBeer.includes(page);
    if (isInclude === false) {
      pagesOfBeer.push(page);
      const response = await beerApi.getWithPagination(page);
      dispatch(receiveBeer(Object.values(response.data)));
    } else {
      const lastPage = pagesOfBeer[Number(pagesOfBeer.length - 1)];
      pagesOfBeer.push(lastPage + 1);
      const response = await beerApi.getWithPagination(
        pagesOfBeer[Number(pagesOfBeer.length - 1)]
      );
      dispatch(receiveBeer(Object.values(response.data)));
    }
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
  console.log(filteredList);
  return {
    type: "BEERS/FILTRATION",
    filteredList,
  };
};
