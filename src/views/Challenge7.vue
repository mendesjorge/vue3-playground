<template>
	<div class="tip-calculator wrapper">
		<div class="tip-amount">
			<div for="tip-amount">Tip Amount</div>
			<sup>{{tipAmount.toFixed(2)}}</sup>
		</div>
		<div class="total-per-person">
			<div for="tip-amount">Total Per Person</div>
			<sup>{{totalPerPerson.toFixed(2)}}</sup>
		</div>
		<div class="input-fields">
			<div class="bill-amount">
				<input type="text" :value="billAmount" @input="updateBillAmountValue"/>
				<div class="label">Bill Amount</div>
			</div>
			<div class="number-of-people">
				<input type="text" :value="nOfPeople" @input="updateNOfPeopleValue"/>
				<div class="label">Number of People</div>
			</div>
		</div>
		<div class="tip-percentages">
			<input type="radio" text="5%" id="5" name="tipPercent" value="5" v-model='tipPercent' checked>
			<label class="label" for="5">5%</label>
			<input type="radio" text="10%" id="10" name="tipPercent" value="10" v-model='tipPercent'>
			<label class="label" for="10">10%</label>
			<input type="radio" text="15%" id="15" name="tipPercent" value="15" v-model='tipPercent'>
			<label class="label" for="15">15%</label>
			<input type="radio" text="20%" id="20" name="tipPercent" value="20" v-model='tipPercent'>
			<label class="label" for="20">20%</label>
		</div>
		<div class="button-wrapper">
			<button @click="calculateHandler">Calculate</button>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue'

export default {
	setup(/* props, { attrs, slots, emit, expose } */) {
		const billAmount = ref()
		const nOfPeople = ref()
		const tipPercent = ref(5)

		const tipAmount = ref(0)
		const totalPerPerson = ref(0)
		
		const calculateHandler = () => {
			const billNumber = Number(billAmount.value.replace(',','.'))
			tipAmount.value = billNumber/nOfPeople.value * tipPercent.value
			totalPerPerson.value = (nOfPeople.value * tipAmount.value + billNumber) / nOfPeople.value
		}
		
		const updateNOfPeopleValue = (ev) => {
			// console.log(ref, ev)
			if(!/\d/.test(ev.data)) {
				// console.log('bad')
				nOfPeople.value = ev.target.value.slice(0,ev.target.value.length - 1)
				ev.target.value = nOfPeople.value
			}
			else nOfPeople.value = ev.target.value
		}
    
		const updateBillAmountValue = (ev) => {
			// console.log(ref, ev)
			if(!/\d/.test(ev.data) && ![','].includes(ev.data)) {
				// console.log('bad')
				billAmount.value = ev.target.value.slice(0,ev.target.value.length - 1)
				ev.target.value = billAmount.value
			}
			else billAmount.value = ev.target.value

		}

		return {
			tipAmount,
			tipPercent,
			billAmount,
			nOfPeople,
			totalPerPerson,
			calculateHandler,
			updateNOfPeopleValue,
			updateBillAmountValue
		}
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Roboto+Mono:wght@700&display=swap');

body {
  background: #F6F6F3;
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  color: #333;
}

.wrapper {
  background: #FFFFFF;
  box-shadow: 0px 0px 44px rgba(148, 146, 120, 0.23);
  border-radius: 20px;
  width: 765px;
  padding-top: 55px;
  align-self: center;
  margin: 0 auto;
}

.tip-amount {
  padding-bottom: 35px;
  border-bottom: 1px solid #DEDEDE;
  margin-bottom: 35px;
}

.total-per-person {
  padding-bottom: 35px;
}

.tip-amount,
.total-per-person {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 35px;
}

.tip-amount label,
.total-per-person label {
  font-size: 0.875rem;
  text-align: right;
}

.tip-amount .dollars,
.total-per-person .dollars {
  font-size: 5rem;
}

.tip-amount sup,
.total-per-person sup {
  font-size: 3rem;
}


.dollars {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}

.input-fields {
  background: #F7F7F7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  padding: 0 35px;
}

.input-fields .bill-amount {
  border-right: 2px solid #DEDEDE;
  padding: 65px 45px 45px 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
}

.input-fields .number-of-people {
  padding: 65px 45px 45px;
  width: 30%;
}

.input-fields .number-of-people .field {
  display: flex;
  align-items: flex-end;
}

.bill-amount .field {
  display: flex;
  align-items: flex-end;
}

input[type="text"] {
  text-align: center;
  font-size: 3.875rem;
  font-family: 'Inter', sans-serif;
  border: none;
  background: none;
  outline: none;
  margin-right: 10px;
  width: 100%;
  border-bottom: 3px dotted #B3B3B3;
}

.bill-amount input[type=text] {
  background: url('/challenge7/dollar.svg') left 15px no-repeat;
  padding-left: 40px;
  width: 100%;
}

.number-of-people input[type=text] {
  background: url('/challenge7/people.svg') left 20px no-repeat;
  padding-left: 40px;
  text-align: right;
}

.input-fields .label {
  margin-bottom: 45px;
  text-align: center;
  padding-top: 10px;
}

.tip-percentages {
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
  background: #EEEEEE;
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
}

label {
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #60C1B6;
  font-family: 'Roboto Mono', monospace;
  width: 135px;
  height: 68px;
  font-size: 1.5rem;
  cursor: pointer;
}

input[type=radio] {
  display: none;
}

input[type=radio]:checked + label {
  background: #60C1B6;
  color: white;
}

.button-wrapper {
  box-sizing: border-box;
  text-align: right;
  width: 100%;
  padding: 30px 35px;
  background: #F7F7F7;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #F7F7F7;
}

button {
  background: #ED7861;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 18px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  color: white;
  border: none;
  padding: 20px 100px;
  margin-left: auto;
  cursor: pointer;
}

button:hover {
  background: #254441;
}
</style>