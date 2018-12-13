<template>
  <div>
	<b-carousel id="carousel1"
		style="margin: 50px auto; max-width: 1024px; max-height: 480px; text-shadow: 1px 1px 2px #333;"
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
		<b-carousel-slide img-blank-color=#476ba0 caption="Create an Account" img-blank img-alt="Create an Account">
			<p>
				To get started click the sign up button in the top right corner.
			</p>
		</b-carousel-slide>

		<!-- Text slides with image -->
		<b-carousel-slide caption="Input your recipes"
			text="Input your families favorite recipes for easy reference and for the menus to choose from.">
			<img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
			src="@/assets/recipe.png" alt="image slot">
		</b-carousel-slide>

		<!-- Text slides with image -->
		<b-carousel-slide caption="Customize your menu"
			text="Our program will create a menu from the recipes you have input. Then you can adjust any recipes replacing them or marking them for other things.">
			<img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
			src="@/assets/Menu.jpg" alt="image slot">
		</b-carousel-slide>

		<!-- Text slides with image -->
		<b-carousel-slide caption="Go shopping"
			text="Once your menu is complete have a shopping list generated for you to check your pantry and get your ingreedients from the store.">
			<img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
			src="@/assets/shopping.png" alt="image slot">
		</b-carousel-slide>
	</b-carousel>
	</div>
</template>

<script>
export default {
  data () {
    return {
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

<style>
</style>