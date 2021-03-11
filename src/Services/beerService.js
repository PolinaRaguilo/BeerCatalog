import axios from "axios";

class BeerService {
  apiClient = axios.create({ baseURL: "https://api.punkapi.com/v2/beers" });

  getWithPagination(page) {
    return this.apiClient.get(`?page=${page}&per_page=12`);
  }
}

export default BeerService;
