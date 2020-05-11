import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const father = r => require.ensure([], () => r(require('../pages/father.vue')), 'father');
const son = r => require.ensure([], () => r(require('../pages/son.vue')), 'son')

const routes = [
	{
		path: '',
		component: father,
		name: '',
		children: [{
			path: '/father',
			component: father,
			meta: [],
		},{
			path: '/son',
			component: son,
		}]
	}
]

export default new Router({
	routes
})