<template>
	<div class="container">
		<div class="content-header">
			<Navbar/>
		</div>
		<div class="content-body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
	name: 'App',
	components: {
		Navbar
	},
	data() {
		return {
		}
	},
}
</script>
