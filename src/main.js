import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes/Index'



const app = createApp(App)

app.directive('numbersOnly', {
	beforeMount: (el, binding)=>{
		binding.handler = () => {
			el.value = el.value.replace(/\D+/, '')
		}
		el.addEventListener('input', binding.handler)
	},
	beforeUnmount: (el, binding) =>{
		el.removeEventListener('input', binding.handler)
	}
})

app.use(router)
app.mount('#app')
