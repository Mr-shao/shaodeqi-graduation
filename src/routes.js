import home from './pages/home/index.vue';
import tool from './pages/tool/index.vue';
import office from './pages/office/index.vue';
import teachers from './pages/teachers/index.vue';
import about from './pages/about/index.vue';
import contact from './pages/contact/index.vue';
import notFound from './pages/not-found/index.vue';
import sign from './common/components/signature.vue';
import cert from './common/components/cert.vue';

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
	{
		path: '/sign',
		component: sign
	},
	{
		path: '/teachers',
		component: teachers
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/contact',
		component: contact
	},
	{
		path: '/cert',
		component: cert
	},
	{
		path: '*',
		component: notFound
	},
	{
		path: '/',
		redirect: '/home'
	}
];

export default routes;