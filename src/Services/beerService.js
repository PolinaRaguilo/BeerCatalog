import axios from "axios";

class BeerService {
  apiUrl = "https://api.punkapi.com/v2/beers";

  getWithPagination() {
    return axios.get(`${this.apiUrl}?page=1&per_page=80`);
  }

  getOneBeer() {
    return axios.get(`${this.apiUrl}/1`);
  }
}

export default BeerService;
