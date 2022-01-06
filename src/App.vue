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
<style scoped>
.container{
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	
	height: 100vh;
}

/* .content-header{

} */
.content-body{
	display: flex;
	flex-grow: 2;
	width: 100vw;
	height: 100%;
	overflow-x: auto;
	
	padding-top: 20px;
}
</style>
