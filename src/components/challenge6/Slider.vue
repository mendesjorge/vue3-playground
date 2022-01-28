<template>
  <div class='slider wrapper'>
		<label class="amount">
			<div v-if="prefix" class="dollar-sign">{{symbol}}</div>
			<div class="dollars" :for='"slide-"+$id'>{{displayValue}}</div>
			<div v-if="!prefix" class="dollar-sign">{{symbol}}</div>
		</label>
		<input type='range' :id="$id" :name='"slide-"+$id' :min="min" :max="max" step="0.01" @input="handleSlideInput"/>
	</div>
</template>

<script>
export default {
	name: 'Slider',
	props: {
		label: String,
		symbol: String,
		prefix: Boolean,
		min: Number,
		max: Number,
		modelValue: Number
	},
	data () {
		return {
		}

	},
	computed:{
		displayValue(){
			return Number(this.modelValue?? this.max).toFixed(2)
		}
	},
	methods:{
		handleSlideInput(ev){
			// console.log(ev.target.value)
			this.$emit('update:modelValue', ev.target.value)
		}
	}
}
</script>
<style lang="css" scoped>
	.slider{
		display:flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
