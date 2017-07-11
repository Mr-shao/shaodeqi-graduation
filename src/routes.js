import home from './pages/home/index.vue';
import tool from './pages/tool/index.vue';
import office from './pages/office/index.vue';
import student from './pages/student/index.vue';
import teachers from './pages/teachers/index.vue';
import about from './pages/about/index.vue';
import contact from './pages/contact/index.vue';
import notFound from './pages/not-found/index.vue';
import action from './pages/action/index.vue';
import school from './pages/school/index.vue';
import sign from './common/components/signature.vue';
import cert from './common/components/cert.vue';

const routes = [
	// 主页
	{
		path: '/home',
		name: 'home',
		component: home
	},
	// 工具桌面
	{
		path: '/tool',
		name: 'tool',
		component: tool
	},
	// 办公
	{
		path: '/office',
		name: 'office',
		component: office
	},
	// 个人签名
	{
		path: '/sign',
		name: 'sign',
		component: sign
	},
	// 师资力量
	{
		path: '/teachers',
		name: 'teachers',
		component: teachers
	},
	// 关于我们
	{
		path: '/about',
		name: 'about',
		component: about
	},
	// 联系我们
	{
		path: '/contact',
		name: 'contact',
		component: contact
	},
	// 证书
	{
		path: '/cert',
		name: 'cert',
		component: cert
	},
	// 最新活动
	{
		path: '/action',
		name: 'action',
		component: action
	},
	// 学生、家长入口
	{
		path: '/school',
		name: 'school',
		component: school
	},
	// 未知页面
	{
		path: '*',
		component: notFound
	},
	// 跳转主页
	{
		path: '/',
		redirect: '/home'
	}
];

export default routes;