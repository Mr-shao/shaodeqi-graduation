<template>
	<div class="text-center">
		<h1>页面还没开发呢！去首页看看吧</h1>
		<img src="../../common/resource/img/404.jpg" alt="" style="border-radius: 50%">
		<router-link to="home"><h2>》》回首页《《</h2></router-link>
	</div>
</template>
<script>
import aboutUs from './components/about.vue';

export default{
	data () {
		return {
		};
	},
	components: {
		'aboutUs': aboutUs
	}
};
</script>
<style>
</style>