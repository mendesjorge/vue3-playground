<template>
	<div class="challenge-11-wrapper">
		<div class="container">
			<ul>
				<li @click="toggleQuestionHandler">
					<div class="question">
						<div class="question-mark">
						<img :src="'./challenge11/question-1.svg'" alt="question" />
						</div>
						<div class="content">Technically, Svelte is a library and SvelteKit is a framework. What's the difference?
						</div>
						<img class="chevron" :src="'/challenge11/chevron.svg'" alt="chevron">
					</div>
					<div class="answer">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
					</p>

					<p>
						Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					</div>
				</li>

				<li class="expand" @click="toggleQuestionHandler">
					<div class="question">
						<div class="question-mark">
						<img :src="'./challenge11/question-2.svg'" alt="question" />
						</div>
						<div class="content">Do you provide a certificate of completion?</div>
						<img class="chevron" :src="'/challenge11/chevron.svg'" alt="chevron">

					</div>
					<div class="answer">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
					</p>

					<p>
						Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>

const toggleQuestionHandler = (e) => {
	e.currentTarget.classList.toggle('expand')
}

</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');

.challenge-11-wrapper{
	width:100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
}

.container {
  max-width: 1010px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 75px;
}

a {
  text-decoration: none;
}

.question {
  background: white;
  border: 5px solid black;
  padding: 25px 38px;
  width: calc(100% - 55px);
  display: block;
  position: relative;
  padding-left: 130px;
  box-sizing: border-box;
  color: black;
}

.expand .question:after{
	content: '';
	background-color: #FFDD00;
	width: calc(100%);
	position: absolute;
	right: -55px;
	top: 15px;
	height: calc(100% + 15px);
	z-index: -1;

}

.question:before {
  content: '';
  display: block;
  background: black;
  width: 102px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}

.question-mark {
  position: absolute;
  left: 10px;
  z-index: 5;
  top: -45px;
}

.chevron {
	/* width:;
	height: 20px; */
  /* background: #F0F0F0 url('/challenge11/chevron.svg') calc(100% - 12px) 20px no-repeat; */
  /* width: calc(100%); */
  position: absolute;
  left: calc(100% + 12px);
  top: 20px;
  /* height: calc(100% + 15px); */
  z-index: 1;
}

.expand .question .chevron,
a:hover .question .chevron{
  transform: rotateX(180deg);
}

.question .content {
  position: relative;
  z-index: 3;
}

.answer {
  display: none;
}

.expand .answer {
  display: block;
  background-color: #FFDD00;
  width: calc(100% - 60px);
  margin-left: 55px;
  padding: 30px 75px;
  box-sizing: border-box;
}
</style>