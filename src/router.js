import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
	// mode: 'history',
	routes,
});
router.beforeEach((to, from, next) => {
	// 解决畅言不刷新不显示的问题
	// console.log(to.name, from.name, to.name === 'contact' && from.name != null)
	if (to.name === 'contact' && from.name !== null) {
		router.go(0);
	}
	next();
})

export default router;