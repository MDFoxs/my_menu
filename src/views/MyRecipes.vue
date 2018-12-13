<template>
<b-card no-body>
  <b-tabs card>
    <b-tab title="All Recipes" active>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <div>
              <b-button href="#" variant="primary" v-b-modal.modal1>Show Breakfast Recipes</b-button>
              <!-- Modal Component -->
              <b-modal id="modal1" title="Bootstrap-Vue">
                <p class="my-4">Recipe Display</p>
                <b-row>
                  <b-col>
                    <p>
                      Ingredients
                    </p>
                    <b-list-group>
                      <b-list-group-item>Ingredient 1</b-list-group-item>
                      <b-list-group-item>Ingredient 2</b-list-group-item>
                    </b-list-group>
                  </b-col>
                  <b-col>
                    <p>
                      Directions
                    </p>
                    <b-list-group>
                      <b-list-group-item>350 for 35 minutes</b-list-group-item>
                      <b-list-group-item>chop veggies...</b-list-group-item>
                    </b-list-group>
                  </b-col>
                </b-row>
              </b-modal>
            </div>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Dinner"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the dinner tag
            </p>
            <b-button href="#" variant="primary">Show Dinner Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Snacks"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the snacks tag
            </p>
            <b-button href="#" variant="primary">Show Snack Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="Breakfast">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <b-button href="#" variant="primary">Show Breakfast Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="Lunch">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <b-button href="#" variant="primary">Show Breakfast Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="Dinner">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <b-button href="#" variant="primary">Show Breakfast Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="Snacks">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <b-button href="#" variant="primary">Show Breakfast Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
    <b-tab title="Desserts">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>  
            <b-card title="Breakfast"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the breakfast tag
            </p>
            <b-button href="#" variant="primary">Show Breakfast Recipes</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Lunch"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
              Recipes with the lunch tag
            </p>
            <b-button href="#" variant="primary">Show Lunch Recipes</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-tab>
  </b-tabs>
</b-card>
</template>

<script>

  export default {
    name: "Protected",
    
  };
</script>

<style>
.nav-tabs a.nav-link {
  color: #476ba0!important;
}

.nav-tabs .nav-link.active {
  color: #8cd4eb!important;
}
</style>