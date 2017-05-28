<template>
	<div>
		<h2 class="text-info">地图：</h2>
		<s-map></s-map>
		<h2 class="text-info">留言：</h2>
		<s-comment></s-comment>
		<div class="text-center">
			<h1>鼓励一下</h1>
			<img src="../../common/resource/img/help.png" width="200px" alt="">
		</div>
	</div>
</template>
<script>
import sComment from '../../common/components/comment.vue';
import sMap from './components/map.vue';

export default{
	data () {
		return {
		};
	},
	components: {
		sComment,
		sMap
	}
};
</script>
<style>
</style>