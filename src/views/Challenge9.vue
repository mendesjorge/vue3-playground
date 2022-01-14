<template>
	<div class="wrapper">
		<div class="feature">
    <img src="challenge9/dave-hoefler-okUIdo6NxGo-unsplash.jpg" alt="Featured" />
    <div class="caption">Photo by Dave Hoefler Unsplash</div>
  </div>

  <div class="thumbnails">
    <ul>
      <li :class="{selected:image.selected}" v-for="(image, index) in imagesContent" :key="index">
        <a href="#" @click="selectImageHandler(image)">
          <img :src="'./challenge9/'+image.image" :alt="image.caption">
        </a>
      </li>
    </ul>
  </div>

  <a href="#" class="left"><img src="./challenge9/chevron.svg" alt=""></a>
  <a href="#" class="right"><img src="./challenge9/chevron.svg" alt=""></a>
	</div>
</template>

<script setup>
import {ref} from 'vue'
const imagesContent = ref([
	{
		'image': 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
		'caption': 'Photo by Dave Hoefler on Unsplash',
		'selected':true
	},
	{
		'image': 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
		'caption': 'Photo by Sherman Yang n Unsplash',
		'selected':false
	},
	{
		'image': 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
		'caption': 'Photo by Jakob Owens on Unsplash',
		'selected':false
	},
	{
		'image': 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
		'caption': 'Photo by Dan Grinwis on Unsplash',
		'selected':false
	},
	{
		'image': 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
		'caption': 'Photo by Vincentiu Solomon on Unsplash',
		'selected':false
	},
	{
		'image': 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
		'caption': 'Photo by Silas Baisch on Unsplash',
		'selected':false
	},
	{
		'image': 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
		'caption': 'Photo by Eugene Golovesov on Unsplash',
		'selected':false
	},
	{
		'image': 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
		'caption': 'Photo by Jennifer reynolds on Unsplash',
		'selected':false
	},
	{
		'image': 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
		'caption': 'Photo by Kellen Riggin on Unsplash',
		'selected':false
	},
	{
		'image': 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
		'caption': 'Photo by Rafael Hoyos on Unsplash',
		'selected':false
	},
	{
		'image': 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
		'caption': 'Photo by Sonya Romanovska on Unsplash',
		'selected':false
	},
])

const selectImageHandler = (image) => {
	imagesContent.value.find(storeImage => storeImage.selected).selected =
	image.selected = true
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

body {
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature {
  padding-bottom: 200px; /* offset thumbnail strip at the bottom */
}

.feature img {
  max-height: 615px;
  max-width: 800px;
}

.caption {
  text-align: center;
  font-size: 14px;
}

.thumbnails {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  overflow-x: scroll;
  scroll-padding: 0 100px;
  scroll-snap-type: both mandatory;
}

.thumbnails ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
  position: relative;
  padding: 0 100px;
}

.thumbnails li:last-child img {
  margin-right: 100px;
}

.thumbnails li {
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}

.thumbnails .selected {
  outline: 10px solid #FF00C7;
  outline-offset: -10px;
}

.thumbnails img {
  object-fit: cover;
  height: 175px;
  width: 175px;
  vertical-align: middle;
}

.left,
.right {
  background: rgba(255, 0, 199, .3);
  width: 100px;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  box-sizing: border-box;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.left:hover,
.right:hover {
  background: rgba(255, 0, 199, 1);
}

.right img {
  transform: rotate(180deg);
  margin: auto;
}
</style>