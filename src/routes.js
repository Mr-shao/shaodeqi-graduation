import home from './pages/home/index.vue';
import tool from './pages/tool/index.vue';
import office from './pages/office/index.vue';

const routes = [
	{
		path: '/home',
		component: home
	},
	{
		path: '/tool',
		component: tool
	},
	{
		path: '/office',
		component: office
	},
];

export default routes;