import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = r => require.ensure([], () => r(require('../pages/test.vue')), 'test')
const father = r => require.ensure([], () => r(require('../pages/father.vue')), 'father');
const son = r => require.ensure([], () => r(require('../pages/son.vue')), 'son')
const slotFather = r => require.ensure([], () => r(require('../pages/slot/slotFather.vue')), 'slotFather');
const slotSon = r => require.ensure([], () => r(require('../pages/slot/slotSon.vue')), 'slotSon')

const routes = [
	{
		path: '/',
		component: father,
		meta: [],
	},{
		path: '/son',
		component: son,
	},{
		path: '/slot',
		component: slotFather,
		children: [{
			path: 'son',
			component: slotSon,
		}]
	}
]

export default new Router({
	routes
})