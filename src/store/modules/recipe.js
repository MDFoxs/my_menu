import _ from "lodash";

const state = {
  recipes: [
    {
      title: "Grilled Cheese",
      source: "https://www.tasteofhome.com/recipes/the-best-ever-grilled-cheese-sandwich/",
      cookTime: "",
      temp: "Medium Heat",
      tags: ["lunch", "dinner", "snack"],
      ingredients: ["bread", "cheese", "butter", "mustard"],
      directions: "Butter 1 side of each slice of bread. Put first piece of bread butter side down in a greased pan. Place cheese and second piece of bread with butter side up on first piece. Optionally add mustard. Heat over medium heat until both sides are golden brown and cheese is melty."
    },
    {
      title: "Peanut Butter and Jelly",
      source: "https://www.tasteofhome.com/recipes/the-best-ever-grilled-cheese-sandwich/",
      cookTime: "",
      temp: "None",
      tags: ["breakfast"],
      ingredients: ["bread", "peanut butter", "jelly"],
      directions: "Take one slice of bread and put peanut butter on one side. Take a second piece of bread and put jelly on one side. Put to two pieces of bread together with the peanut butter and jelly touching."
    }
  ]
};

const getters = {
  getRecipes: state => state.recipes,
  getBreakfast: state => _.filter(state.recipes, recipe => _.includes(recipe.tags, "breakfast")),
  getLunch: state => _.filter(state.recipes, recipe => _.includes(recipe.tags, "lunch")),
  getDinner: state => _.filter(state.recipes, recipe => _.includes(recipe.tags, "dinner")),
  getSnack: state => _.filter(state.recipes, recipe => _.includes(recipe.tags, "snack")),
  getDessert: state => _.filter(state.recipes, recipe => _.includes(recipe.tags, "dessert"))
};

const mutations = {
  addRecipe: (state, newRecipe) => {
    state.recipes = [...state.recipes, newRecipe];
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}