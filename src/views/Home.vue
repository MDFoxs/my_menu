<template>
  <div>
	<b-carousel id="carousel1"
							style="text-shadow: 1px 1px 2px #333;"
							controls
							indicators
							background="#ababab"
							:interval="4000"
							img-width="1024"
							img-height="480"
							v-model="slide"
							@sliding-start="onSlideStart"
							@sliding-end="onSlideEnd"
	>
		<!-- Slide with blank fluid image to maintain slide aspect ratio -->
		<b-carousel-slide caption="Create an Account" img-blank img-alt="Create an Account">
			<p>
				To get started click the sign up button in the top right corner.
			</p>
		</b-carousel-slide>

		<!-- Text slides with image -->
		<b-carousel-slide caption="Input your recipes"
											text="Input your families favorite recipes for easy reference and for the menus to choose from."
											img-src="https://get.pxhere.com/photo/hand-table-book-restaurant-dish-meal-food-culinary-produce-kitchen-recipe-breakfast-paper-healthy-eat-lunch-cuisine-homemade-page-preparation-cook-tasty-frisch-dine-benefit-from-ingredients-cookbook-italian-food-recipes-881861.jpg"
		></b-carousel-slide>

					<!-- Text slides with image -->
		<b-carousel-slide caption="Customize your menu"
											text="Our program will create a menu from the recipes you have input. Then you can adjust any recipes replacing them or marking them for other things."
											img-src="https://www.maxpixel.net/static/photo/1x/Dark-Cabinetry-Dark-Cabinets-Kitchen-3564506.jpg"
		></b-carousel-slide>

					<!-- Text slides with image -->
		<b-carousel-slide caption="Go shopping"
											text="Once your menu is complete have a shopping list generated for you to check your pantry and get your ingreedients from the store."
											img-src="https://get.pxhere.com/photo/fruit-flower-city-shop-store-food-vendor-produce-vegetable-color-market-marketplace-shopping-groceries-tomato-public-space-supermarket-grocery-store-hypermarket-sense-human-settlement-convenience-store-greengrocer-super-market-1379249.jpg"
		></b-carousel-slide>
	</b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>