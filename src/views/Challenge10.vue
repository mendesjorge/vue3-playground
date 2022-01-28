<template>
	<div class="challenge-10-wrapper">
		<div class="container" :class="{'rotate': startRotateCard}">
			<h1>Authorization Code</h1>
			<p>Please enter the code that we sent to (***) *** - 2819.</p>
			<form>
				<div class="fields">
				<input type="text" maxlength="1" v-numbersOnly v-model="numbers[0]" @input="$event.target.value.length && $refs['input-1'].focus()"/>
				<input ref="input-1" type="text" maxlength="1" v-model="numbers[1]" @input="$event.target.value.length && $refs['input-2'].focus()"/>
				<input ref="input-2" type="text" maxlength="1" v-model="numbers[2]" @input="$event.target.value.length && $refs['input-3'].focus()"/>
				<input ref="input-3" type="text" maxlength="1" v-model="numbers[3]" />
				</div>
				<button @click="verifyButtonHandler">Verify</button>
			</form>
		</div>
		<div class="container-back-card" :class="{'rotate-back':rotateCard,'success':success, 'fail': !success}">
			<h1>{{success? 'success':'fail'}}</h1>
			<p v-if="!success">right code is "1234"</p>
			<button @click="tryAgainHandler">Try Again</button>
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
const startRotateCard = ref(false)
const rotateCard = ref(false)

const verifyButtonHandler = () => {
	console.log(code, code === '1234')
	success.value = code.value === '1234'
	startRotateCard.value = true
	setTimeout(()=>{
		rotateCard.value = true
	}, 1000)
}
const tryAgainHandler = () => {
	rotateCard.value = false
	setTimeout(()=>{
		startRotateCard.value = false
	}, 1000)
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
  position: relative;
}
.container, .container-back-card{
	background: white;
	box-shadow: 0px 23px 44px #CAD0E0;
	border-radius: 10px;
	min-width: 575px;
	padding: 70px 35px 30px;
	position: absolute;
}
.container{
	transition: transform 1s ease-in, visibility 1s ease-in;
}
.rotate{
	transform: rotateY(90deg);
	visibility: hidden;
}
.container-back-card{
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	transform: rotateY(-90deg);
	visibility: hidden;
	height: 300px;
	transition: visibility 1s ease-in, transform 1s ease-in;
}
.container-back-card.rotate-back{
	transform: rotateY(0deg);
	visibility: visible;
}
.container-back-card.success{
	background-color: lightgreen;
	
}
.container-back-card.fail{
	background-color: pink;
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