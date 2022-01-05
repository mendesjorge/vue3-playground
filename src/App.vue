<template>
	<div class="container">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Slider v-model="sliderValue" label="Slider" min="0" max="10" prefix symbol="€"/>
	</div>
</template>

<script>
import Slider from './components/Slider.vue'

export default {
	name: 'App',
	components: {
		Slider
	},
	data() {
		return {
			sliderValue: null
		}
	},
}
</script>
