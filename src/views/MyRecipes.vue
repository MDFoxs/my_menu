<template>
<div>
  <b-button v-b-modal.addRecipeForm id="add-recipe">Add recipe</b-button>
  <b-modal ref="addRecipeForm" hide-footer id="addRecipeForm" title="New Recipe">
    <div>
      <b-form @submit="saveRecipe">
        <b-form-group>
          <b-form-input id="recipe-title"
                        type="text"
                        v-model="recipe.title"
                        required
                        placeholder="Enter Recipe Title">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input id="recipe-source"
                        type="text"
                        v-model="recipe.source"
                        placeholder="Enter Recipe Source">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input id="recipe-cook-time"
                        type="text"
                        v-model="recipe.cookTime"
                        placeholder="Enter Recipe Cook Time">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input id="recipe-temp"
                        type="text"
                        v-model="recipe.temp"
                        placeholder="Enter Recipe Temperature">
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox-group v-model="recipe.tags" id="recipe-tags">
            <b-form-checkbox value="breakfast">Breakfast</b-form-checkbox>
            <b-form-checkbox value="lunch">Lunch</b-form-checkbox>
            <b-form-checkbox value="dinner">Dinner</b-form-checkbox>
            <b-form-checkbox value="snack">Snack</b-form-checkbox>
            <b-form-checkbox value="dessert">Dessert</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group>
          <b-form-input id="recipe-source"
                        type="text"
                        v-model="ingredientText"
                        placeholder="Enter Recipe ingredient">
          </b-form-input>
          <b-button @click="addIngredient">Add</b-button>
        </b-form-group>
        <b-list-group v-for="ingredient in recipe.ingredients" :key="ingredient">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ingredient}}
              <b-badge variant="danger" href="#" @click="removeIngredient(ingredient)"> Remove</b-badge>
            </b-list-group-item>
          </b-list-group>
        <b-form-group>
          <b-form-textarea id="recipe-directions"
                        v-model="recipe.directions"
                        placeholder="Enter Recipe Directions"
                        :rows="3"
                        :max-rows="6"
                        required>
          </b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </b-modal>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="All Recipes" active>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in recipes" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
                <!-- Modal Component -->
                <b-modal hide-footer :id="`${camelCase(recipe.title)}-modal`" :title="recipe.title" :ref="camelCase(recipe.title)">
                  <p class="my-4">Recipe Display</p>
                  <b-row>
                      <p>Ingredients</p>
                      <b-list-group>
                        <b-list-group-item v-for="ing in recipe.ingredients" :key="ing">{{ing}}</b-list-group-item>
                      </b-list-group>
                  </b-row>
                  <b-row>
                      <p>Directions: </p>
                      <p>{{ recipe.directions }}</p>
                  </b-row>
                </b-modal>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-if="breakfast.length > 0" title="Breakfast">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in breakfast" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-else title="Breakfast">
        Cards with breakfast recipes will show in here
      </b-tab>
      <b-tab v-if="lunch.length > 0" title="Lunch">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in lunch" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-else title="Lunch">
        Cards with lunch recipes will show in here
      </b-tab>
      <b-tab v-if="dinner.length > 0" title="Dinner">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in dinner" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-else title="Dinner">
        Cards with dinner recipes will show in here
      </b-tab>
      <b-tab v-if="snacks.length > 0" title="Snacks">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in snacks" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-else title="Snacks">
        Cards with snack recipes will show in here
      </b-tab>
      <b-tab v-if="dessert.length > 0" title="Dessert">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>  
              <b-card v-for="recipe in dessert" :key="recipe.title" :title="recipe.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                {{stringifyTags(recipe.tags)}}
              </p>
              <div>
                <b-button variant="primary" @click="openRecipe(recipe.title)">Click to see recipe</b-button>
              </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab v-else title="Dessert">
        Cards with dessert recipes will show in here
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
  import _ from "lodash";
  import { mapGetters } from "vuex";

  export default {
    data () {
      return {
        recipe: {
          title: "",
          source:"",
          cookTime: "",
          temp: "",
          tags: [],
          directions: "",
          ingredients: [],
        },
        ingredientText: ""
      }
    },
    methods: {
      saveRecipe (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.recipe));
        this.$store.commit("recipe/addRecipe", this.recipe);
        this.$refs.addRecipeForm.hide();
      },
      onCancel (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      addIngredient() {
        this.errorText = "";
        if (_.isEmpty(this.ingredientText)) {
          this.errorText = "Please enter ingredient!";
          return;
        }
        if(!_.includes(this.ingredients, this.ingredientText)) {
          this.recipe.ingredients.push(this.ingredientText);
          this.ingredientText = "";
        } else {
          this.errorText = "Ingredient already in list!";
        }
      },
      removeIngredient(ingredient) {
        this.recipe.ingredients = _.filter(this.ingredients, ing => ing != ingredient);
      },
      stringifyTags(tags) {
        return _.join(tags, ", ");
      },
      openRecipe(recipe) {
        const thing = this.camelCase(recipe);
        this.$refs[thing][0].show(); // ???? Por queeee ????
      },
      camelCase(str) {
        return _.camelCase(str);
      },
      includes(arr, elem) {
        return _.includes(arr, elem);
      }
    },
    computed: {
      ...mapGetters("recipe", {
        recipes: "getRecipes",
        breakfast: "getBreakfast",
        lunch: "getLunch",
        dinner: "getDinner",
        snacks: "getSnack",
        dessert: "getDessert"
      }),
    }
  }
</script>

<style>
.nav-tabs a.nav-link {
  color: #476ba0!important;
}

.nav-tabs .nav-link.active {
  color: #8cd4eb!important;
}

#add-recipe {
  margin: 25px;
}
</style>