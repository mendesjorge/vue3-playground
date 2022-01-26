<template>
	<div class="nav-wrapper">
		<router-link class='route-link' to="/challenge-6">Challenge 6</router-link>
		<router-link class='route-link' to="/challenge-7">Challenge 7</router-link>
		<router-link class='route-link' to="/challenge-8">Challenge 8</router-link>
		<router-link class='route-link' to="/challenge-9">Challenge 9</router-link>
		<router-link class='route-link' to="/challenge-10">Challenge 10</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.nav-wrapper{
	background-color: lightgreen;
	box-shadow: 0 0 20px 0 black;
	height: 50px;

	display: flex;
	flex: 1 1 auto;

	justify-content: center;
	align-items: center;
	gap: 20px;
}
.route-link{
	text-decoration: none;
	color: transparent;
	background-color: lightgrey;
	font-weight: bolder;
	font-size: 30px;
	text-shadow: 1px 0px 1px #58c44eab;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
}

.route-link:active{
	text-shadow: 1px 0 1px #ffffffab;
}
.route-link:hover{
	text-shadow: 1px 0 1px #ffffffd5;
}

.route-link.router-link-exact-active{
	text-shadow: 1px 0 1px #e5ff00c0;
}
</style>