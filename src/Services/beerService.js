import axios from "axios";

class BeerService {
  apiUrl = "https://api.punkapi.com/v2/beers";

  getWithPagination(page) {
    return axios.get(`${this.apiUrl}?page=${page}&per_page=12`);
  }

  getOneBeer() {
    return axios.get(`${this.apiUrl}/1`);
  }
}

export default BeerService;
