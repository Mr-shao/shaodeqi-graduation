<template>
	<div>
		<div class="text-center">
			<h1>给个鼓励！（8.8）</h1>
			<img src="../../common/resource/img/help.png" width="200px" alt="">
			<h1>既然来了，留个言再走吧！</h1>
		</div>
		<s-comment></s-comment>
	</div>
</template>
<script>
import sComment from '../../common/components/comment.vue';

export default{
	data () {
		return {
		};
	},
	components: {
		'sComment': sComment
	}
};
</script>
<style>
</style>