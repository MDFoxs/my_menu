import axios from "axios";
import qs from "qs";

const edamamApi = axios.create({
  baseURL: "https://api.edamam.com",
  params: {
    app_id: "223b8c0e",
    app_key: "d4b82fd96b209abba79648a260d84375"
  }
});

export default {
  getRecipes(recipes) {
    return edamamApi.get("search", {
      params: {
        q: recipes
      },
      paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat"})
    });
  }
}