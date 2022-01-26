import * as VueRouter from 'vue-router'
// 1. Define route components.
// These can be imported from other files
import Home from '../views/Home.vue'
import Challenge6 from '../views/Challenge6.vue'
import Challenge7 from '../views/Challenge7.vue'
import Challenge8 from '../views/Challenge8.vue'
import Challenge9 from '../views/Challenge9.vue'
import Challenge10 from '../views/Challenge10.vue'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
	{ path: '/', component: Home },
	{ path: '/challenge-6', component: Challenge6 },
	{ path: '/challenge-7', component: Challenge7 },
	{ path: '/challenge-8', component: Challenge8 },
	{ path: '/challenge-9', component: Challenge9 },
	{ path: '/challenge-10', component: Challenge10 }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHashHistory(),
	routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
// Make sure to _use_ the router instance to make the
// whole app router-aware.
export default router