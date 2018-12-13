<template>
  <div>
    <h1>{{errorText}}</h1>
     <b-container>
      <b-row>
        <b-col sm="10">
          <b-form-input id="input-large" size="lg" v-model="ingredientText" type="text" placeholder="Please enter ingredient"></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button @click="addIngredient" size="lg">Add</b-button>
        </b-col>
      </b-row>
      <b-row class="buffer" v-show="hasIngredients">
        <b-col cols="12">
          <b-button v-b-modal.modal1 @click="getRecipes" size="lg">
            Find recipes!
          </b-button>
        </b-col>
      </b-row>
      <b-row class="buffer">
        <b-col >
          <b-list-group v-for="ingredient in ingredients" :key="ingredient">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ingredient}}
              <b-badge variant="danger" href="#" @click="removeIngredient(ingredient)"> Remove</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal1" title="Recipes">
      <b-card v-for="recipe in recipes" :key="recipe.label" :title="recipe.label"
              :img-src="recipe.image"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2">
        <p v-for="ing in recipe.ingredientLines" :key="ing.id" class="card-text">
          {{ing}}
        </p>
        <b-button :href="recipe.url" variant="primary">Go to  {{recipe.source}} for the recipe!</b-button>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
  import _ from "lodash";
  import edamam from "@/edamam";

  export default {
    name: "Protected",
    data() {
      return {
        ingredients: [],
        recipes: [],
        errorText: "",
        ingredientText: ""
      }
    },
    methods: {
      addIngredient() {
        this.errorText = "";
        if (_.isEmpty(this.ingredientText)) {
          this.errorText = "Please enter ingredient!";
          return;
        }
        if(!_.includes(this.ingredients, this.ingredientText)) {
          this.ingredients.push(this.ingredientText);
          this.ingredientText = "";
        } else {
          this.errorText = "Ingredient already in list!";
        }
      },
      removeIngredient(ingredient) {
        this.ingredients = _.filter(this.ingredients, ing => ing != ingredient);
      },
      getRecipes() {
        this.recipes = [];
        return edamam.getRecipes(this.ingredients).then(res => {
          _.each(res.data.hits, hit =>  {
            if (!_.includes(this.recipes, hit.recipe)) this.recipes.push(hit.recipe)
          });
        });
      }
    },
    computed: {
      hasIngredients() {
        return this.ingredients.length > 0;
      }
    }
  };
</script>

<style>
  .buffer {
    margin-top: 25px;
  }
</style>