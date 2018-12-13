import axios from "axios";

const edamamApi = axios.create({
  baseURL: "https://api.edamam.com/search",
  params: {
    app_id: "223b8c0e",
    app_key: "d4b82fd96b209abba79648a260d84375"
  }
});

export default {
  getRecipes(recipes) {
    return edamamApi.get("/", {
      params: {
        q: recipes[0]
      }
    });
  }
}