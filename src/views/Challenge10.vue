<template>
	<div class="challenge-10-wrapper">
		<div class="container" :class="{'rotate': rotateCard}">
			<h1>Authorization Code</h1>
			<p>Please enter the code that we sent to (***) *** - 2819.</p>
			<form>
				<div class="fields">
				<input type="text" maxlength="1" v-model="numbers[0]" />
				<input type="text" maxlength="1" v-model="numbers[1]" />
				<input type="text" maxlength="1" v-model="numbers[2]" />
				<input type="text" maxlength="1" v-model="numbers[3]" />
				</div>
				<button @click="verifyButtonHandler">Verify</button>
			</form>
		</div>
		<div class="container-back-card" :class="{'success':hasSucceed, 'fail': hasFailed}">
			{{hasSucceed? 'success':'fail'}}
			<button @click="rotateCard = false">Try Again</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const numbers = ref(['','','',''])
const code = computed(() =>
	numbers.value.reduce((prev,cur) => prev+cur)
)

let success = ref(false)
const rotateCard = ref(false)

const hasSucceed = computed(()=> success.value && rotateCard.value)
const hasFailed = computed(()=> !success.value && rotateCard.value)

const verifyButtonHandler = () => {
	success.value = code === '1234'
	rotateCard.value = true
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap');

.challenge-10-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.container, .container-back-card{
	background: white;
	box-shadow: 0px 23px 44px #CAD0E0;
	border-radius: 10px;
	min-width: 575px;
	height: 300px;
	padding: 70px 35px 30px;
}
.container{
	transition: transform 1s ease-in-out, visibility 0s 1s ease-in-out;
}
.rotate{
	transform: rotateY(90deg);
	visibility: hidden;
}
.container-back-card{
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: rotateY(-90deg);
	visibility: hidden;
	transition: visibility 1s 1s ease-in-out, transform 1s 1s ease-in-out;
	transition-delay: 1s;
}

.container-back-card.success{
	background-color: lightgreen;
	transform: rotateY(0deg);
	visibility: visible;
}
.container-back-card.fail{
	background-color: lightgreen;
	transition-delay: 1s;
	transform: rotateY(0deg);
	visibility: visible;
}
h1 {
  text-align: center;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: #6778E8;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 12px;
}

p {
  text-align: center;
  margin-bottom: 40px;
}

.fields {
  margin-bottom: 45px;
  display: flex;
  justify-content: center;;
}

input[type=text] {
  color: #6778E8;
  font-weight: 900;
  font-size: 3.75rem;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin: 0px 10px;
  font-family: 'Source Sans Pro', sans-serif;
  border: none;
  text-align: center;
  width: 80px;
  background: #F0F3FA;
  height: 85px;
}


button {
  width: 100%;
  text-align: center;
  background: linear-gradient(93.32deg, #8D9EFF -10.93%, #A674FB 113.82%);
  border-radius: 10px;
  border: none;
  height: 75px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0;
}

button {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.11em;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

</style>